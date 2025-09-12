import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function FeedingGuide() {
  const [feedingData, setFeedingData] = useState([])
  const rows = 15

  useEffect(() => {
    fetch('/data/feedingGuide.json')
      .then((res) => res.json())
      .then((data) => setFeedingData(data))
      .catch((err) => console.error('Error loading feeding guide:', err))
  }, [])

  // render số thứ tự
  const indexTemplate = (rowData, options) => {
    return options.rowIndex + 1
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">
        Feeding Guide
      </h2>

      <DataTable
        value={feedingData}
        paginator
        rows={rows}
        stripedRows
        showGridlines
        tableStyle={{ minWidth: '50rem', border: '1px solid #ddd' }}
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
  )
}
