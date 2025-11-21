# 🐾 Anipat Care - Pet Care Portal

**Anipat Care (FurEver Care)** is a Single Page Application (SPA) built with ReactJS to connect pet owners, veterinarians, and shelters.

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple)

---

## 🇬🇧 English Version

### 📜 Introduction
**FurEver Care** aims to solve the complexity of modern pet care. It provides a centralized platform where users can manage pet health, discover products, and connect with the animal-loving community.

### ✨ Key Features

#### 🐾 For Pet Owners
- **Pet Care:** Static profiles, feeding guides, grooming videos, and health tips.
- **Product Showcase:** Explore food, toys, and supplies (loaded from JSON).
- **Emergency Support:** Quick access to vet emergency contacts.

#### ⛑️ For Veterinarians
- **Specialist Profile:** Showcase specialty and contact info.
- **Appointment Calendar:** View booked and available slots.
- **Case Studies:** Reference sample medical records.

#### 🏡 For Animal Shelters
- **Adoption Gallery:** List pets for adoption with smart filters (species, age).
- **Success Stories:** Heartwarming adoption stories.
- **Events & Contact:** Shelter events and Google Maps integration.

### 🛠️ Technologies Used

- **Core:** React 19, Vite 7
- **UI & Styling:** PrimeReact, PrimeFlex, PrimeIcons, Lucide React
- **Carousel:** React Slick, Slick Carousel
- **Utilities:** SweetAlert2 (Notifications), Quill (Rich Text)
- **Routing:** React Router DOM

### 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/thanhdattt2006/Pet-Care.git](https://github.com/thanhdattt2006/Pet-Care.git)
    cd Pet-Care
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the application**
    ```bash
    npm run dev
    ```

    Open the link shown in the terminal (usually `http://localhost:5173`) to view the app.

### 📁 Folder Structure
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   └── App.jsx
└── package.json

---

## 🇻🇳 Phiên bản Tiếng Việt

### 📜 Giới thiệu
**FurEver Care** là giải pháp toàn diện cho việc chăm sóc thú cưng trong thời đại mới. Dự án giúp người dùng quản lý sức khỏe thú cưng, tìm kiếm sản phẩm và kết nối cộng đồng yêu động vật.

### ✨ Tính năng Chính

#### 🐾 Cho Chủ nuôi (Pet Owners)
- **Chăm sóc:** Xem hướng dẫn nuôi dạy, video grooming và mẹo sức khỏe.
- **Cửa hàng:** Danh sách sản phẩm (thức ăn, đồ chơi) tải từ dữ liệu JSON.
- **Khẩn cấp:** Danh bạ bác sĩ thú y hỗ trợ khẩn cấp.

#### ⛑️ Cho Bác sĩ Thú y (Veterinarians)
- **Hồ sơ:** Hiển thị thông tin chuyên môn và liên hệ.
- **Lịch hẹn:** Xem các khung giờ khám bệnh (chế độ xem).
- **Bệnh án:** Tham khảo các ca bệnh mẫu.

#### 🏡 Cho Trại cứu hộ (Shelters)
- **Nhận nuôi:** Danh sách thú cưng tìm chủ với bộ lọc thông minh.
- **Câu chuyện:** Các bài viết về ca nhận nuôi thành công.
- **Sự kiện:** Thông tin sự kiện và bản đồ đường đi tới trại.

### 🛠️ Công nghệ Sử dụng

- **Nền tảng:** React 19, Vite 7
- **Giao diện:** PrimeReact, PrimeFlex, PrimeIcons, Lucide React
- **Hiệu ứng:** React Slick (Carousel), SweetAlert2 (Thông báo)
- **Định tuyến:** React Router DOM

### 🚀 Cài đặt và Chạy dự án

Làm theo các bước sau để chạy web trên máy của bạn:

1.  **Tải mã nguồn (Clone)**
    ```bash
    git clone [https://github.com/thanhdattt2006/Pet-Care.git](https://github.com/thanhdattt2006/Pet-Care.git)
    cd Pet-Care
    ```

2.  **Cài đặt thư viện**
    ```bash
    npm install
    ```

3.  **Chạy dự án**
    ```bash
    npm run dev
    ```

    Mở đường dẫn hiển thị trong terminal (thường là `http://localhost:5173`) để xem kết quả.

### ⚠️ Lưu ý
- Dự án là **Client-side (Frontend)** hoàn toàn.
- Dữ liệu được đọc từ các file `.json` tĩnh trong thư mục `public/data`.
- Không có Backend lưu trữ dữ liệu người dùng.
