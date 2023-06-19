import { Router, Request, Response } from "express";
import { ThongTinService } from "../services/ThongTin.service";

const router = Router();
const thongTinService = new ThongTinService();

router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      HoTen,
      SDT,
      addressNumber,
      addressDistrict,
      addressProvince,
      addressCommune,
      GhiChu,
    } = req.body;

    const insertedHoTen = await thongTinService.addThongTin(
      HoTen,
      SDT,
      addressNumber,
      addressDistrict,
      addressProvince,
      addressCommune,
      GhiChu
    );

    res.json({ insertedHoTen });
  } catch (error) {
    console.error("Error while saving information", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
