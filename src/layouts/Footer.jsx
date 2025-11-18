import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            {/* Contact */}
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Contact Us</h3>
                <ul className="address_line">
                  <li>+8477 5255 721</li>
                  <li>
                    <a href="mailto:thanhdattt2006@gmail.com">thanhdattt2006@gmail.com</a>
                  </li>
                  <li>35/6 D5 street, Binh Thanh Street, Saigon</li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Our Services</h3>
                <ul className="links">
                  <li><a href="/pet-profile">Pet profile</a></li>
                  <li><a href="/feeding-guide">Feeding guide</a></li>
                  <li><a href="/grooming-videos">Grooming Videos</a></li>
                  <li><a href="//health-training-tips">Health & Training Tips</a></li>
                  <li><a href="/feedback">Feedback</a></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Quick Links</h3>
                <ul className="links">
                  <li><a href="about">About Us</a></li>
                  <li><a href="emergency">Emergency & Vet Help</a></li>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/shelter">Shelter</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Logo + Social */}
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <img src="img/logo.png" alt="Logo" />
                  </a>
                </div>
                <p className="address_text">
                  35/6 D5 street, Binh Thanh Street, Saigon
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="https://github.com/thanhdattt2006/Pet-Care" target='blank'><i className="fa fa-github"></i></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61566148584421" target='blank'><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/datdodoc19/"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-th%C3%A0nh-619b37340/" target='blank'><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy right */}
      <div className="copy-right_text">
        <div className="container">
          <div className="bordered_1px"></div>
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | This template is made with{" "}
                <i className="ti-heart" aria-hidden="true"></i> by{" "}
                <a
                  href="https://Unknown.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Unknown
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
