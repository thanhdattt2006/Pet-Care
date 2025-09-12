import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-area ">
        {/* Top bar */}
        <div className="header-top_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="short_contact_list">
                  <ul>
                    <li>
                      <a href="#">+880 4664 216</a>
                    </li>
                    <li>
                      <a href="#">Mon - Sat 10:00 - 7:00</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 ">
                <div className="social_media_links">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-pinterest-p"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-3 col-lg-3">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>

              {/* Menu */}
              <div className="col-xl-9 col-lg-9">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/emergency">Emergency & Vet Help</Link></li>

                      {/* Dropdown Pet Owner */}
                      <li>
                        <a href="#">Pet Owner <i className="ti-angle-down"></i></a>
                        <ul className="submenu">
                          <li><Link to="/pet-profile">Pet Profile</Link></li>
                          <li><Link to="/feeding-guide">Feeding Guide</Link></li>
                          <li><Link to="/grooming-videos">Grooming Videos</Link></li>
                          <li><Link to="/health-training-tips">Health & Training Tips</Link></li>
                          
                        </ul>
                      </li>

                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/feedback">Feedback</Link></li>
                      <li><Link to="/shelter">Shelter</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Mobile menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
