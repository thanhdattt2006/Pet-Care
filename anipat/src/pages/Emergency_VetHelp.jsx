import React, { useEffect, useState } from "react";
import "../Emergency_VetHelp.css";

function Emergency_VetHelp() {
  const [data, setData] = useState({ hotlines: [], vets: [], doctors: [] });

  useEffect(() => {
    fetch("/emergencyData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Lỗi khi load dữ liệu:", err));
  }, []);

  return (
    <div className="container">
      <h1 className="title"> Hỗ Trợ Cấp Cứu Thú Y</h1>

      {/* Danh sách hotline */}
      <section>
        <h2 className="section-title"> Hotline khẩn cấp</h2>
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

      {/* Danh sách phòng khám */}
      <section>
        <h2 className="section-title"> Phòng khám gần bạn</h2>
        <div className="vet-grid">
          {data.vets.map((vet) => (
            <div key={vet.id} className="vet-card">
              <h3>{vet.name}</h3>

              <div className="vet-info">
                <span className="label"> Địa chỉ:</span>
                <span className="value">{vet.address}</span>
              </div>

              <div className="vet-info">
                <span className="label"> Điện thoại:</span>
                <a href={`tel:${vet.phone}`} className="value">{vet.phone}</a>
              </div>

              <div className="vet-info">
                <span className="label"> Trạng thái:</span>
                <span className={`value ${vet.status.includes('Mở') ? 'status-open' : 'status-closed'}`}>
                  {vet.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Danh sách bác sĩ */}
      <section>
        <h2 className="section-title"> Danh sách bác sĩ</h2>
        <div className="doctor-grid">
          {data.doctors.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-avatar"></div>
              <h3>{doc.name}</h3>
              <div className="doctor-specialty">{doc.specialty}</div>
              <a href={`tel:${doc.phone}`}> {doc.phone}</a>
              <div className="doctor-experience">Kinh Nghiệm: {doc.experience}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Emergency_VetHelp;