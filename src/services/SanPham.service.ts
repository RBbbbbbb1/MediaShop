import { SanPham } from "../entities/SanPham.entity";
import { getRepository } from "typeorm";

const sanPhamRepository = getRepository(SanPham);

export async function addSanPham(sanPhamData: Omit<SanPham, "MaSP">): Promise<SanPham> {
  const sanPham = new SanPham();
  Object.assign(sanPham, sanPhamData);
  const newSanPham = await sanPhamRepository.save(sanPham);
  return newSanPham;
}


export const getSanPhamById = async (id: string): Promise<SanPham | null> => {
  const sanPhamRepository = getRepository(SanPham);
  return await sanPhamRepository.findByIds([id]).then((sanPhams) => sanPhams[0] || null);
};