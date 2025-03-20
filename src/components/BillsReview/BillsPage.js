import React from "react";
import { Box} from "@mui/material";
import Sidebar from "./Sidebar";
import Nav from "./navbar";
import PaymentDetails from "./PaymentDetails";
import InvoiceDashboard from './InvoiceDashboard'

const BillsPage = () => {
  return (
    <Box display="flex" height="100vh" width="100vw">
    <Box sx={{ flexShrink: 0 }}>
      <Sidebar />
    </Box>

    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Nav />
      <Box sx={{ flexGrow: 1, padding: "20px", backgroundColor: "#F8F9FA" }}>
        <InvoiceDashboard/>
      </Box>
    </Box>

    <Box sx={{ width: "300px", flexShrink: 0 }}>
      <PaymentDetails />
    </Box>
  </Box>
  );
};

export default BillsPage;
