import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "SanPham" })
export class SanPham {

  @PrimaryGeneratedColumn("uuid")
  MaSP: string;

  @Column({ type: "nvarchar", length: 60 })
  TenSP: string;

  @Column({ type: "float" })
  GiaBan: number;

  @Column({ type: "nvarchar", length: 100 })
  Mota: string;
}
