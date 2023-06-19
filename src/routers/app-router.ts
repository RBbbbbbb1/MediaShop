import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import { addSanPham } from "../services/SanPham.service";
import { ThongTin } from "../entities/ThongTin.entity";
import { HoaDon } from "../entities/HoaDon.entity";

const router = express.Router();

// Thêm sản phẩm mới
router.post("/sanpham", async (req: Request, res: Response) => {
  try {
    const { TenSP, GiaBan, Mota } = req.body as any;

    const sanPhamData = {
      TenSP,
      GiaBan,
      Mota,
    };

    const newSanPham = await addSanPham(sanPhamData);

    res.json({ success: true, data: newSanPham });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message || "Something went wrong" });
  }
  
});

router.post("/thongtin", async (req: Request, res: Response) => {
  try {
    const { HoTen, SDT, addressNumber, addressDistrict, addressProvince, addressCommune, GhiChu } = req.body;

    // Lưu thông tin vào bảng ThongTin
    const thongTinRepo = getRepository(ThongTin);
    const thongTin = new ThongTin();
    thongTin.HoTen = HoTen;
    thongTin.SDT = SDT;
    thongTin.addressNumber = addressNumber;
    thongTin.addressDistrict = addressDistrict;
    thongTin.addressProvince = addressProvince;
    thongTin.addressCommune = addressCommune;
    await thongTinRepo.save(thongTin);

    // Lưu thông tin vào bảng HoaDon
    const hoaDonRepo = getRepository(HoaDon);
    const hoaDon = new HoaDon();
    hoaDon.GhiChu = GhiChu;
    await hoaDonRepo.save(hoaDon);

    res.status(201).json({ message: "Thông tin đã được lưu thành công" });
  } catch (error) {
    console.error("Error saving user information: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router };
