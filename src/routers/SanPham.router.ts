import { Router, Request, Response } from "express";
import { SanPhamService } from "../services/SanPham.service";

const router = Router();
const sanPhamService = new SanPhamService();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { TenSP, GiaBan, Mota } = req.body;

    const insertedId = await sanPhamService.addSanPham(TenSP, GiaBan, Mota);

    res.json({ insertedId });
  } catch (error) {
    console.error("Error while saving product", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
