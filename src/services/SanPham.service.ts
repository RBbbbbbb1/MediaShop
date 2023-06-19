import { getConnection } from "typeorm";
import { SanPham } from "../entities/SanPham.entity";
import { Connection } from "typeorm";

export class SanPhamService {
  async addSanPham(TenSP: string, GiaBan: number, Mota: string) {
    const connection: Connection = getConnection();
    const query = `
      INSERT INTO SanPham (TenSP, GiaBan, Mota)
      VALUES (?, ?, ?)
    `;
    const values = [TenSP, GiaBan, Mota];

    try {
      const result = await connection.query(query, values);
      const insertedId = result.insertId;
      return insertedId;
    } catch (error) {
      throw error;
    }
  }
}
