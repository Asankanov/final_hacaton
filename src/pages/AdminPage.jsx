import { Container } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";
import AdminTable from "../components/AdminTable";

const AdminPage = () => {
  return (
    <div>
      <Container>
        <h2 style={{ color: "white" }}>Admin Page</h2>
        <AdminTable />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
