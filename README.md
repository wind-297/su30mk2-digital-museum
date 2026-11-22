# SU-30MK2 — Bảo tàng Số Hiện vật Hàng không Quốc phòng Việt Nam

Website triển lãm số lưu trữ và thuyết minh chuyên sâu máy bay tiêm kích đa năng **Sukhoi Su-30MK2** — hiện vật tiêu biểu trong tiến trình hiện đại hóa lực lượng Không quân Nhân dân Việt Nam thế kỷ XXI.

---

## 🎯 Mục tiêu Dự án

Sản phẩm thuộc dự án giáo dục quốc phòng:
**EM LÀ NHÀ SÁNG TẠO – BẢO TÀNG QUỐC PHÒNG VIỆT NAM**

Website được xây dựng theo phong cách:
`CONTEMPORARY MILITARY MUSEUM × AVIATION EDITORIAL × DIGITAL ARCHIVE`
Phục vụ học sinh THPT, giáo viên, chuyên gia và công chúng nghiên cứu lịch sử hàng không quân sự Việt Nam.

---

## 🌐 Đường dẫn Website (Live Demo)

- **Website chính thức:** [https://wind-297.github.io/su30mk2-digital-museum/](https://wind-297.github.io/su30mk2-digital-museum/)
- **Mã nguồn Repository:** [https://github.com/wind-297/su30mk2-digital-museum](https://github.com/wind-297/su30mk2-digital-museum)

---

## 🛠️ Công nghệ sử dụng

- **Core Framework:** [Astro v7 (Static Site Generation)](https://astro.build/) — Hiệu năng vượt trội, tải trang tức thì, zero-JS mặc định.
- **Ngôn ngữ:** TypeScript & Astro Components.
- **Styling Architecture:** Modern CSS với Custom Properties, Design Tokens, Grid và Flexbox layout.
- **Đồ họa kỹ thuật:** SVG Blueprint 2D tương tác với hệ thống hotspot và panel thuyết minh thời gian thực.
- **Typography:** Playfair Display (Editorial Serif) kết hợp Inter (Modern Sans-serif) và JetBrains Mono (Technical plaque), hỗ trợ trọn vẹn tiếng Việt có dấu.
- **CI/CD & Hosting:** GitHub Actions workflow tự động build và triển khai lên GitHub Pages.

---

## 🏛️ Cấu trúc Trải nghiệm Triển lãm

1. **Section 01 — Hero:** Tên hiện vật SU-30MK2, ảnh tiêm kích cỡ lớn, thẻ thông số nhanh (Quốc gia, Nhà thiết kế, Tổ lái, Động cơ) và nút CTA khám phá.
2. **Section 02 — Overview:** Phiếu hồ sơ bảo tàng `#SU30-MK2`, phân loại đa năng, ảnh Su-30MK2 số hiệu 8533 và phân biệt các biến thể MKI/SM/MKK.
3. **Section 03 — History Timeline:** Trục thời gian 2 giai đoạn (Quốc tế và Việt Nam) từ khởi nguồn Su-27 đến mốc chuyển giao 36 máy bay (2004–2016).
4. **Section 04 — Role & Mission:** 4 trụ cột nhiệm vụ bảo vệ vùng trời, vùng biển đảo Tổ quốc, huấn luyện phi công và tính đa nhiệm.
5. **Section 05 — Anatomy 2D Blueprint:** Sơ đồ kỹ thuật tương tác 9 bộ phận máy bay, nhấp hotspot cập nhật thuyết minh ngay lập tức.
6. **Section 06 — Technical Specs:** Thống kê đồ họa và bảng thông số kỹ thuật đã xác minh từ nhà sản xuất Rosoboronexport.
7. **Section 07 — Vietnam Context:** Tiến trình hiện đại hóa Không quân Nhân dân Việt Nam, Trung đoàn 935 ("Hổ mang chúa"), Trung đoàn 927 ("Lam Sơn"), vai trò phi công và kỹ thuật viên.
8. **Section 08 — Conclusion:** Khép lại hành trình với giá trị lịch sử, quốc phòng và vai trò con người trong sự nghiệp bảo vệ Tổ quốc.
9. **Section 09 — References:** 8 tài liệu khoa học và báo chí chính thống với đường dẫn URL trực tiếp.
10. **Footer:** Định danh dự án, bản quyền giáo dục phi thương mại và ghi công hình ảnh Wikimedia Commons.

---

## 💻 Hướng dẫn Chạy Local & Build

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Chạy môi trường phát triển (Development Server)
npm run dev

# 3. Build mã nguồn tĩnh cho Production
npm run build

# 4. Chạy thử nghiệm bản build trước khi deploy
npm run preview
```

---

## 🔄 Cách cập nhật nội dung Website

1. Chỉnh sửa văn bản thuyết minh trong file `src/data/content.ts` (nội dung được tách biệt hoàn toàn khỏi giao diện).
2. Kiểm tra bản build: `npm run build`.
3. Commit và push lên nhánh `main`:
   ```bash
   git add .
   git commit -m "docs: cập nhật nội dung thuyết minh"
   git push origin main
   ```
4. GitHub Actions sẽ tự động kích hoạt workflow kiểm thử, build và deploy phiên bản mới lên GitHub Pages trong vòng 1-2 phút.

---

## 📜 Bản quyền và Tuyên bố Miễn trừ

- **Tính chất dự án:** Sản phẩm số thuộc dự án sáng tạo giáo dục phi thương mại.
- **Dữ liệu thuyết minh:** Biên tập từ các nguồn tài liệu lịch sử, kỹ thuật và thông cáo báo chí công khai đã kiểm chứng (CNA, Rosoboronexport, ODIN, Báo Quân đội nhân dân, VTC News, Soha).
- **Hình ảnh tư liệu:** Sử dụng theo giấy phép Public Domain (US Embassy Hanoi) và Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) từ Wikimedia Commons với ghi công đầy đủ.
