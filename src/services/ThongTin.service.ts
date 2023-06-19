import { getConnection, QueryRunner } from "typeorm";
import { HoaDon } from "../entities/HoaDon.entity";
import { ThongTin } from "../entities/ThongTin.entity";
import { Connection } from "typeorm";

export class ThongTinService {
  async addThongTin(
    HoTen: string,
    SDT: string,
    addressNumber: string,
    addressDistrict: string,
    addressProvince: string,
    addressCommune: string,
    GhiChu: string
  ) {
    const connection: Connection = getConnection();
    const queryRunner: QueryRunner = connection.createQueryRunner();

    const hoaDon = new HoaDon();
    hoaDon.GhiChu = GhiChu;

    const thongTin = new ThongTin();
    thongTin.HoTen = HoTen;
    thongTin.SDT = SDT;
    thongTin.addressNumber = addressNumber;
    thongTin.addressDistrict = addressDistrict;
    thongTin.addressProvince = addressProvince;
    thongTin.addressCommune = addressCommune;

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const insertHoaDonQuery = `
        INSERT INTO HoaDon (GhiChu)
        VALUES (?)
      `;
      const insertHoaDonValues = [GhiChu];
      const insertHoaDonResult = await queryRunner.query(insertHoaDonQuery, insertHoaDonValues);

      const insertedHoaDonId = insertHoaDonResult.insertId;
      hoaDon.MaHoaDon = insertedHoaDonId;

      const insertThongTinQuery = `
        INSERT INTO ThongTin (HoTen, SDT, addressNumber, addressDistrict, addressProvince, addressCommune, MaHoaDon)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const insertThongTinValues = [
        HoTen,
        SDT,
        addressNumber,
        addressDistrict,
        addressProvince,
        addressCommune,
        insertedHoaDonId,
      ];
      await queryRunner.query(insertThongTinQuery, insertThongTinValues);

      await queryRunner.commitTransaction();

      return HoTen;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
