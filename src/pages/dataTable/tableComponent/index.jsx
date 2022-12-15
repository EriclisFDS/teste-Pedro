import { useState } from "react"
import DataTable from "react-data-table-component"

import { users } from "../fakeUsers"



export default function TableComponent(){
    const ExpandedComponent = ({ data }) => {
        return(
            <div className="ml-20">
                <div  className="mb-2 text-sm mt-4">
                    <span>
                        Address
                    </span>
                </div>
                <div className="flex space-x-32 text-xs">
                    <div className=" ml-2 space-y-4 mb-4">
                        <div>
                            <span>Street: </span>
                            <span>
                                {JSON.stringify(data.address.street).replace(/["]/g, '')}
                            </span>
                        </div>
                        <div>
                            <span>Suite: </span>
                            <span>
                                {JSON.stringify(data.address.suite).replace(/["]/g, '')}
                            </span>
                        </div>
                    </div>
                    <div className=" ml-2 space-y-4 mb-4">
                        <div>
                            <span>City: </span>
                            <span>
                                {JSON.stringify(data.address.city).replace(/["]/g, '')}
                            </span>
                        </div>
                        <div>
                            <span>Zipcode: </span>
                            <span>
                                {JSON.stringify(data.address.zipcode).replace(/["]/g, '')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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
        <div className="mt-6 max-w-5xl mx-auto">
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