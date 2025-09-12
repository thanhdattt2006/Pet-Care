import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">About Us</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About FurEver Care</h5>
                            <p className="card-text">
                                Welcome to <strong>FurEver Care</strong> - your trusted companion for all your pet care needs. Our mission is to create a centralized platform where pet owners, veterinarians and rescue shelters can connect and share information easily.

                            </p>
                            <p className="card-text">
                                We understand that caring for a four-legged friend requires a lot of effort. That's why FurEver Care is built to simplify the process of managing your pet's overall health, nutrition, and happiness.

                            </p>

                            <h5 className="card-title mt-4">Our Team</h5>

                            <p className="card-text">
                                We are a team of developers and animal lovers who share a passion for using technology to improve the lives of pets and their owners. We believe that every pet deserves the best love and care.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
