import { addSanPham } from "../src/services/SanPham.service";

// Tạo đối tượng SanPham
const newSanPham = {
  TenSP: 'Tên sản phẩm',
  GiaBan: 100,
  Mota: 'Mô tả sản phẩm',
};

// Gọi hàm addSanPham
addSanPham(newSanPham)
  .then((SanPham) => {
    console.log('Sản phẩm đã được thêm:', SanPham);
  })
  .catch((error) => {
    console.error('Lỗi khi thêm sản phẩm:', error);
  });
