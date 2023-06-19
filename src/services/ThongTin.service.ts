import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class ThongTinService {
  constructor(private readonly connection: Connection) {}

  async createThongTin(nguoiDungData: any): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();

    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      const { HoTen, SDT, addressNumber, addressDistrict, addressProvince, GhiChu } = nguoiDungData;

      // Lưu thông tin vào bảng ThongTin
      await queryRunner.query(
        `INSERT INTO ThongTin (HoTen, SDT, addressNumber, addressDistrict, addressProvince) VALUES (?, ?, ?, ?, ?)`,
        [HoTen, SDT, addressNumber, addressDistrict, addressProvince]
      );

      // Lưu GhiChu vào bảng HoaDon
      await queryRunner.query(
        `INSERT INTO HoaDon (GhiChu) VALUES (?)`,
        [GhiChu]
      );

      await queryRunner.commitTransaction();

      return { success: true, message: 'Thông tin đã được lưu thành công' };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return { success: false, message: 'Đã xảy ra lỗi khi lưu thông tin' };
    } finally {
      await queryRunner.release();
    }
  }
}
