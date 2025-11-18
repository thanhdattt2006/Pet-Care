import React from 'react'

export default function Slider() {
  return (
    <>
        <div className="slider_area">
        <div className="single_slider slider_bg_1 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="slider_text">
                            <h3>We Care <br/> <span>Your Pets</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod.</p>
                            <a href="contact" className="boxed-btn4">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dog_thumb d-none d-lg-block">
                <img src="img/banner/dog.png" alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}
