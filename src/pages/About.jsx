import React from 'react';

const About = () => {
    return (
        <>
            <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/about"> About</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h2 className="text-center mb-4">About Us</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card container">
                        <div className="card-body">
                            <h5 className="card-title">About Anipat Care</h5>
                            <p className="card-text">
                                Welcome to Anipat Care - your trusted companion for all your pet care needs. Our mission is to create a centralized platform where pet owners, veterinarians, and rescue shelters can connect and share information easily.

                                We understand that caring for a four-legged friend requires a lot of effort and dedication. That's why Anipat Care is built to simplify the process of managing your pet's overall health, nutrition, and happiness.

                            </p>
                            <h5>Our Story</h5>
                            <p className="card-text">
                                Anipat Care was born from an endless love for our furry friends and from the very challenges that we, as pet owners, have personally experienced. Managing tons of information—from vaccination schedules and medical records to dietary plans and finding a reputable vet clinic in an emergency—has always been a challenge. We dreamed of a single place that could solve all these problems. And so, Anipat Care was created.
                            </p>
                            <h5>Our Vision</h5>
                            <p className="card-text">
                                We aim to build a comprehensive pet care ecosystem where technology helps remove all barriers, so that every pet can live the healthiest, happiest, and most fulfilling life with their owners.
                            </p>

                            <h5 className="card-title mt-4">Our Team</h5>
                            <p className="card-text">
                                We are a team of developers and animal lovers who share a passion for using technology to improve the lives of pets and their owners. We believe that every pet deserves the best love and care.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
