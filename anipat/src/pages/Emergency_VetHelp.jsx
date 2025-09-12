import React, { useEffect, useState } from "react";
import "../Emergency_VetHelp.css";

function Emergency_VetHelp() {
  const [data, setData] = useState({ hotlines: [], vets: [], doctors: [] });

  useEffect(() => {
    fetch("data/emergencyData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Lỗi khi load dữ liệu:", err));
  }, []);

  return (
    <div className="container">
      <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcam_text text-center">
                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/emergency">Emergency & VetHelp</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1 className="title"> Veterinary Emergency Support</h1>

      {/* Hotline list */}
      <section>
        <h2 className="section-title"> Emergency Hotline</h2>
        <div className="hotline-grid">
          {data.hotlines.map((line, index) => (
            <div key={index} className="hotline-card">
              <div className="icon"></div>
              <h3>{line.name}</h3>
              <a href={`tel:${line.phone}`}>{line.phone}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic list */}
      <section>
        <h2 className="section-title"> Clinics near you</h2>
        <div className="vet-grid">
          {data.vets.map((vet) => (
            <div key={vet.id} className="vet-card">
              <h3>{vet.name}</h3>

              <div className="vet-info">
                <span className="label"> Address:</span>
                <span className="value">{vet.address}</span>
              </div>

              <div className="vet-info">
                <span className="label"> Phone:</span>
                <a href={`tel:${vet.phone}`} className="value">{vet.phone}</a>
              </div>

              <div className="vet-info">
                <span className="label"> Status:</span>
                <span className={`value ${vet.status.includes('Open') ? 'status-open' : 'status-closed'}`}>
                  {vet.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* List of doctors */}
      <section>
        <h2 className="section-title"> List of doctors</h2>
        <div className="doctor-grid">
          {data.doctors.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-avatar"></div>
              <h3>{doc.name}</h3>
              <div className="doctor-specialty">{doc.specialty}</div>
              <a href={`tel:${doc.phone}`}> {doc.phone}</a>
              <div className="doctor-experience">Experience: {doc.experience}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Emergency_VetHelp;