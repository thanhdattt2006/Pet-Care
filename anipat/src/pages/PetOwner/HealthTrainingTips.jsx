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
    <>
    <div className="bradcam_area breadcam_bg w-full">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcam_text text-center">
                <h3 className="text-base sm:text-lg md:text-2xl">
                  <a href="/">Home</a>
                  <i
                    className="pi pi-arrow-right px-2 text-sm sm:text-lg"
                  ></i>
                  <a href="/health-training-tips"> Health & Training Tips</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="p-4 sm:p-6">
      {/* Breadcrumb */}

      <br />

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center border-b pb-2">
        Health & Training Tips
      </h2>

      {/* DataTable responsive */}
      <div className="w-full overflow-x-auto">
        <DataTable
          value={tips}
          paginator
          rows={10}
          stripedRows
          showGridlines
          responsiveLayout="scroll"
          emptyMessage="No tips available."
          className="w-full text-center container"
        >
          <Column
            header="STT"
            body={indexTemplate}
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
            style={{ width: '60px' }}
          />
          <Column
            header="Category"
            body={categoryTemplate}
            sortable
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
          />
          <Column
            field="tip"
            header="Tip"
            sortable
            headerClassName="text-center font-semibold"
            bodyClassName="text-center"
          />
        </DataTable>
      </div>
    </div>
    </>
  )
}
