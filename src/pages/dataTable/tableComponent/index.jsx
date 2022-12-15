import { useState } from "react"
import DataTable from "react-data-table-component"

import { users } from "../fakeUsers"



export default function TableComponent(){
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true
        },
    ]
    return (
        <div className="max-w-5xl mx-auto">
            <DataTable 
                title="Data"
                columns={columns}
                data={users}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                pagination
            />
        </div>
    )
}