import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "ThongTin" })
export class ThongTin {
  @PrimaryColumn({ type: "varchar", length: 30 })
  HoTen: string;

  @Column({ type: "varchar", length: 30 })
  SDT: string;

  @Column({ length: 30 })
  addressNumber: string;

  @Column({ length: 30 })
  addressDistrict: string;

  @Column({ length: 30 })
  addressProvince: string;

  @Column({ length: 30 })
  addressCommune: string;
}
