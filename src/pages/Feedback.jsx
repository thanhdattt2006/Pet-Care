import React from 'react';

const Feedback = () => {
    return (
        <>
            <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/feedback"> Feedback</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-4">Send Feedback</h2>
                    <div className="card container">
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
                                <div className="mb-3">
                                    <label htmlFor="feedback" className="form-label">Feedback content</label>
                                    <textarea className="form-control" id="feedback" rows="5" placeholder="Write your feedback here..."></textarea>
                                </div>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;