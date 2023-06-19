import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DonHang {
  @PrimaryGeneratedColumn({ type: "int" })
  MaDonHang: number;

  @Column({ nullable: true })
  MaHoaDon: string;

  @Column({ length: 60 })
  TenSP: string;

  @Column()
  GiaBan: number;

  @Column()
  SoLuong: number;

  @Column()
  TongTien: number;
}
