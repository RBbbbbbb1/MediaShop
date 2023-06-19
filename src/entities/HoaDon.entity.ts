import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "HoaDon" })
export class HoaDon {
  @PrimaryColumn({ type: "nvarchar", length: 60 })
  MaHoaDon: string;

  @Column({ type: "nvarchar", length: 60 })
  HoTen: string;

  @Column({ type: "nvarchar", length: 10 })
  SDT: string;

  @Column({ type: "nvarchar", length: 60 })
  DiaChi: string;

  @Column({ type: "nvarchar", length: 100 })
  GhiChu: string;

  @Column({ type: "int" })
  ThanhTien: number;
}
