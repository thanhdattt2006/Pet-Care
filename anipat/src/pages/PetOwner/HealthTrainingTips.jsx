import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Tag } from 'primereact/tag'

// STT
const indexTemplate = (rowData, options) => options.rowIndex + 1

// Category Tag
const categoryTemplate = (rowData) => {
  const severity = rowData.category === 'Health' ? 'success' : 'info'
  return <Tag value={rowData.category} severity={severity} />
}

export default function HealthTrainingTips() {
  const [tips, setTips] = useState([])

  useEffect(() => {
    fetch('/data/healthTrainingTips.json')
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error('Error loading tips:', err))
  }, [])

  return (
    <div className="p-6">
      {/* ✅ Căn giữa tiêu đề */}
      <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcam_text text-center">
                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/health-training-tips"> Health & Training Tips</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className="text-2xl font-bold mb-4 text-center">
        Health & Training Tips
      </h2>

      <DataTable
        value={tips}
        paginator
        rows={15}
        stripedRows
        showGridlines
        tableStyle={{ minWidth: '50rem', border: '1px solid #ddd', textAlign: 'center' }}
        emptyMessage="No tips available."
      >
        <Column
          header="STT"
          body={indexTemplate}
          style={{ width: '60px', textAlign: 'center' }}
        />
        <Column
          header="Category"
          body={categoryTemplate}
          sortable
          style={{ textAlign: 'center' }}
        />
        <Column
          field="tip"
          header="Tip"
          sortable
          style={{ textAlign: 'center' }}
        />
      </DataTable>
    </div>
  )
}
