import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import React from "react";
// import "./App.css";
import "../../App.css";
//import DashboardNavbar from './components/navbar/index';
// import SignInSide from "./components/index";
import Signup from "./components/employeeform/index";
import DataTable from "./components/employeelist";
import CustomizedDialogs from "./components/dialog/index";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="App">
        <CustomizedDialogs tittle="ADD NEW EMPLOYEE">
          <Signup />
        </CustomizedDialogs>
      </div>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
