import 'primeicons/primeicons.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "../context/CartSidebar";

export default function Header() {
  const [hover, setHover] = useState(false);
  const { cartItems } = useCart();
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <div className="header-area">
        {/* Top bar */}
        <div className="header-top_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="short_contact_list">
                  <ul>
                    <li><a href="#">+8477 5255 721</a></li>
                    <li><a href="#">Mon - Sat 10:00 - 7:00</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="social_media_links">
                  <a href="https://www.facebook.com/profile.php?id=61566148584421" target='blank'><i className="fa fa-facebook"></i></a>
                  <a href="https://github.com/thanhdattt2006/Pet-Care" target='blank'><i className="fa fa-github"></i></a>
                  <a href="https://www.instagram.com/datdodoc19/"><i className="fa fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-th%C3%A0nh-619b37340/" target='blank'><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              {/* Logo */}
              <div className="logo">
                <a href="/">
                  <img src="/img/logo.png" alt="Logo" />
                </a>
              </div>

              {/* Menu */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation" className="d-flex align-items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/emergency">Emergency & Vet Help</Link></li>

                    {/* Dropdown */}
                    <li className="has-sub">
                      <a href="#">
                        Pet Owner <i className="ti-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li><Link to="/pet-profile">Pet Profile</Link></li>
                        <li><Link to="/feeding-guide">Feeding Guide</Link></li>
                        <li><Link to="/grooming-videos">Grooming Videos</Link></li>
                        <li><Link to="/health-training-tips">Health & Training Tips</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li><Link to="/shelter">Shelter</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    {/* Cart icon */}
                    <li
                      style={{
                        cursor: "pointer",
                        color: hover ? "#f96a29" : "inherit",
                        transition: "color 0.2s ease",
                        listStyle: "none",
                        marginLeft: "15px",
                        
                      }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      onClick={() => setVisible(true)}
                    >
                      <i className="pi pi-shopping-cart"></i>
                      {cartItems.length > 0 && (
                        <span style={{ marginLeft: "4px" }}>
                          ({cartItems.length})
                        </span>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile menu */}
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar giỏ hàng */}
      <CartSidebar visible={visible} setVisible={setVisible} />
    </header>
  );
}
