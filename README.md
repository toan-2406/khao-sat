# Sev7n Solutions - The 7-Step Standard Form

Dự án khảo sát nhu cầu dịch vụ giặt là chuyên nghiệp dành cho Khách sạn, Resort, Spa và các cơ sở kinh doanh (B2B). 

## 🏗️ Kiến trúc & Công nghệ
- **Frontend**: React.js + Vite.
- **Styling**: Vanilla CSS (được tách riêng biệt để dễ bảo trì).
- **Thiết kế**: Theo tiêu chuẩn Agentic Coding, tối ưu hóa trải nghiệm người dùng (UX) qua 7 bước khảo sát chuyên sâu.

## 📁 Cấu trúc Code (Refactored)
Dự án được cấu trúc theo mô hình Component-Based bền vững:
- `src/components/Sev7nForm/`: Thư mục chính chứa toàn bộ logic form.
  - `steps/`: Mỗi bước khảo sát là một component riêng biệt.
  - `ui/`: Các thành phần giao diện dùng chung (RadioGroup, FormHeader,...).
  - `styles/`: Quản lý giao diện tập trung.
  - `constants.js`: Quản lý cấu hình và dữ liệu tĩnh.

## 🚀 Hướng dấn phát triển
1. Cài đặt các gói phụ thuộc:
```bash
npm install
```
2. Chạy môi trường phát triển:
```bash
npm run dev
```

## 📝 Quy trình 7 bước (The 7-Step Standard)
1. **Phân Loại**: Thông tin cơ sở.
2. **Khối Lượng**: Khối lượng & tần suất giặt.
3. **Danh Mục**: Phân loại đồ cần giặt.
4. **Yêu Cầu**: Các yêu cầu đặc biệt (mùi hương, khử khuẩn,...).
5. **Ngân Sách**: Kỳ vọng chi phí.
6. **Giao Nhận**: Lịch trình giao trả hàng.
7. **Liên Hệ**: Thông tin liên hệ trực tiếp.

---
*Phát triển bởi Sev7n Labs.*
