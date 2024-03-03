import React from 'react'
import './datatable.scss'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";

function Datatable() {
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: () => {
            return (
              <div className="cellAction">
                  <div className="viewButton">View</div>
              <div className="deleteButton">
                  Delete
              </div>
              </div>
            );
          },
        },
      ];
    return (
        <div className='dataTable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
