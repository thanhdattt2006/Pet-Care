// src/pages/product/FeedingGuide.jsx
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function FeedingGuide() {
  const [feedingData, setFeedingData] = useState([]);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [rows, setRows] = useState(isMobile ? 8 : 15);

  useEffect(() => {
    fetch('/data/feedingGuide.json')
      .then((res) => res.json())
      .then((data) => setFeedingData(data))
      .catch((err) => console.error('Error loading feeding guide:', err));
  }, []);

  // resize handler
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setRows(mobile ? 8 : 15);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // render số thứ tự
  const indexTemplate = (rowData, options) => options.rowIndex + 1;

  return (
    <div className="feeding-guide page-container">
      <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcam_text text-center">
                <h3>
                  <a href="/">Home </a>
                  <i
                    className="pi pi-arrow-right"
                    style={{ padding: '0rem 1rem', fontSize: '30px' }}
                  ></i>
                  <a href="/feeding-guide">Feeding Guide</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">
        Feeding Guide
      </h2>

      <div className="table-wrapper">
        <DataTable
          value={feedingData}
          paginator
          className='container'
          rows={rows}
          stripedRows
          showGridlines
          responsiveLayout={isMobile ? 'stack' : 'scroll'}
          tableStyle={
            isMobile
              ? { width: '100%', border: '1px solid #ddd' }
              : { minWidth: '50rem', border: '1px solid #ddd' }
          }
          emptyMessage="No data found."
        >
          <Column
            header="STT"
            body={indexTemplate}
            style={{ width: '80px' }}
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
          />
          <Column
            field="pet"
            header="Pet"
            sortable
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
          />
          <Column
            field="ageStage"
            header="Age Stage"
            sortable
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
          />
          <Column
            field="foodAmount"
            header="Food Amount"
            sortable
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
          />
        </DataTable>
      </div>
    </div>
  );
}
