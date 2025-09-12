import React from "react";
import Slider from "react-slick";
import { Home, Scissors, PawPrint } from "lucide-react"; // icons đẹp

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesAndGallery.css"; // file css custom

export default function ServicesAndGallery() {
  // config cho carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // list ảnh mẫu
  const galleryImages = [
    "/img/pet/Meo-tam-the-chan-ngan-nhap-khau-DD060-600x600.jpg",
    "/img/pet/Cho-Phoc-Soc-Loang-Cham-Pom-Thai-D034-600x600.jpg",
    "/img/pet/Meo-Anh-Long-Dai-Trang-Vang-Cat-Mat-Xanh-D071.jpg",
    "/img/pet/Cho-Alaska-Nhap-Thai.jpg",
    "/img/pet/z6629822296355_ad2c14a7ef55b6a0d15402f8964fdde0-592x600.jpg",
    "/img/pet/Cho-corgi-nhap-khau-2.jpg",
    "/img/pet/Cho-Chow-Chow-Nhap-Nga-415x600.jpg",
    "/img/pet/Meo-serval-nhap-nga-1.jpg",
  ];

  return (
    <div className="services-gallery">
      {/* 3 khối dịch vụ */}
      <div className="services-container">
        <div className="service-card">
          <Home size={40} />
          <h3>Hotel Service</h3>
          <p>READ MORE</p>
        </div>
        <div className="service-card">
          <Scissors size={40} />
          <h3>Spa & Grooming</h3>
          <p>READ MORE</p>
        </div>
        <div className="service-card">
          <PawPrint size={40} />
          <h3>Other Service</h3>
          <p>READ MORE</p>
        </div>
      </div>

      {/* slider hình ảnh */}
      <div className="gallery-container">
        <h2 className="gallery-title">KHOẢNH KHẮC THÚ CƯNG</h2>
        <p className="gallery-subtitle">PET LIKE US AND SO WILL YOU</p>

        <Slider {...settings}>
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-slide">
              <img src={img} alt={`Pet ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
