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
                  <li>+555 0000 565</li>
                  <li>
                    <a href="mailto:Demomail@gmail.Com">Demomail@gmail.Com</a>
                  </li>
                  <li>700, Green Lane, New York, USA</li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Our Services</h3>
                <ul className="links">
                  <li><a href="#">Pet Insurance</a></li>
                  <li><a href="#">Pet Surgeries</a></li>
                  <li><a href="#">Pet Adoption</a></li>
                  <li><a href="#">Dog Insurance</a></li>
                  <li><a href="#">Cat Insurance</a></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Quick Links</h3>
                <ul className="links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Login Info</a></li>
                  <li><a href="#">Knowledge Base</a></li>
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
                  239 E 5th St, New York NY 10003, USA
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
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
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
