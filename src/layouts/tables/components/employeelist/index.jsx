import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import { Margin } from "@mui/icons-material";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 100 },
  { field: "gender", headerName: "Gender", width: 90 },
  { field: "position", headerName: "Position", width: 100 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "address", headerName: "Address", width: 120 },
  { field: "qualification", headerName: "Qualification", width: 100 },
  { field: "dob", headerName: "Dateofbirth", type: "number", width: 120 },
  { field: "doj", headerName: "Dateofjoining", type: "number", width: 120 },
  { field: "experience", headerName: "Experience", width: 100, type: "number" },
  {
    field: "Print",
    headerName: "Click",
    width: 90,
    renderCell: (params) => {
      return <button>Click</button>;
      // you will find row info in params
    },
  },
];

const rows = [
  {
    id: 1,
    Name: "Jon khan",
    email: " jon@gmail.com",
    address: "jafar nagar",
    qualification: "B.E",
    dob: "26/7/1992",
    doj: "21/2/2018",
    experience: "8 yrs",
  },
];

//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable({}) {
  return (
    <div style={{ height: 700, width: "100%", backgroundColor: "lightblue" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
