import express from "express";
import { initialDatabase } from "./instances/data-source";
import sanPhamRouter from "./routers/SanPham.router";
import thongTinRouter from "./routers/ThongTin.router";

const app = express();
const port = 3306;

// Kết nối cơ sở dữ liệu và khởi tạo các bảng và dữ liệu mẫu (nếu cần)
initialDatabase();

// Cấu hình cho phép nhận dữ liệu dạng JSON
app.use(express.json());

// Kết nối router
app.use("/sanpham", sanPhamRouter);
app.use("/thongtin", thongTinRouter);

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
