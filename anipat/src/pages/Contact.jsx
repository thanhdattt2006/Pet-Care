import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/contact"> Contact</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row container" style={{margin: '0 auto'}}>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Group contact information</h5>
                            <p><strong>Address:</strong> 123 ABC Street, District 1, Ho Chi Minh City</p>
                            <p><strong>Email:</strong> support@anipatcare.com</p>
                            <p><strong>Phone:</strong> (028) 3844 1234</p>
                            <hr />
                            <p>We are always ready to listen and support you. Don't hesitate to contact us if you need help!</p>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                                    </div>
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447793428843!2d106.70014831527379!3d10.77698399232079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f499c8f185f%3A0x2931b6bf643a6a1c!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2s!4v1662888123456!5m2!1sen!2s"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Location">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;