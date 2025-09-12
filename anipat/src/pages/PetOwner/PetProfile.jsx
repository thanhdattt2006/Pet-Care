import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Tag } from 'primereact/tag'
import './PetOwner.css'


export default function PetProfile() {
  const [pets, setPets] = React.useState([])

  React.useEffect(() => {
    fetch('/data/ownerPets.json')
      .then(res => res.json())
      .then(data => setPets(data))
      .catch(err => console.error(err))
  }, [])

  // Vaccine tag
  const vaccineTemplate = (rowData) => (
    <Tag
      value={rowData.vaccinated ? 'Yes' : 'No'}
      severity={rowData.vaccinated ? 'success' : 'danger'}
    />
  )

  // Type tag
  const typeTemplate = (rowData) => {
    const severity =
      rowData.type === 'Dog'
        ? 'info'
        : rowData.type === 'Cat'
          ? 'warning'
          : 'success'

    return <Tag value={rowData.type} severity={severity} />
  }

  // Age tag
  const ageTemplate = (rowData) => {
    let label = rowData.age
    let severity

    if (rowData.age < 2) {
      label = `${rowData.age} (Young)`
      severity = 'success'
    } else if (rowData.age > 8) {
      label = `${rowData.age} (Senior)`
      severity = 'warning'
    }

    return severity ? <Tag value={label} severity={severity} /> : label
  }

  // STT column
  const indexTemplate = (rowData, options) => options.rowIndex + 1

  return (
    <div className="p-6 overflow-x-auto">
      <div className="bradcam_area breadcam_bg" style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcam_text text-center">
                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/pet-profile"> Pet Profile</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">
        Pet Profile
      </h2>

      <DataTable
        value={pets}
        paginator
        rows={15}
        stripedRows
        showGridlines
        size="small"
        responsiveLayout="scroll"
        tableStyle={{ minWidth: '60rem', border: '1px solid #ddd' }}
        emptyMessage="No pets found."
      >
        <Column
          header="STT"
          body={indexTemplate}
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
          style={{ width: '60px' }}
        />
        <Column
          field="name"
          header="Name"
          sortable
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
        />
        <Column
          header="Type"
          body={typeTemplate}
          sortable
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
        />
        <Column
          field="breed"
          header="Breed"
          sortable
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
        />
        <Column
          header="Age"
          body={ageTemplate}
          sortable
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
        />
        <Column
          field="weight"
          header="Weight"
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
        />
        <Column
          header="Vaccinated"
          body={vaccineTemplate}
          sortable
          headerClassName="text-center font-semibold"
          bodyClassName="text-center"
        />
      </DataTable>
    </div>
  )
}
