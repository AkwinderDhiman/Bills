import React, { useState } from "react";
import {
  Box,
  Button,
  Tabs,
  Tab,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InvoiceImage from "../../assets/invoice.jpeg";


const bills = [
  { id: 1, name: "Bill 1", date: "Nov 1, 2019", amount: "£50.59" },
  { id: 2, name: "Bill 2", date: "Nov 1, 2019", amount: "£50.59" },
  { id: 3, name: "Bill 3", date: "Nov 1, 2019", amount: "£50.59" },
  { id: 4, name: "Bill 4", date: "Nov 1, 2019", amount: "£50.59" },
  { id: 5, name: "Bill 5", date: "Nov 1, 2019", amount: "£50.59" },
  { id: 6, name: "Bill 6", date: "Nov 1, 2019", amount: "£50.59" },
];

const InvoiceDashboard = () => {
  const [activeTab, setActiveTab] = useState("bills");
  const [selectedBill, setSelectedBill] = useState(bills[0]);
  return (
    <Box p={3} bgcolor="white" minHeight="100vh" borderRadius={2}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#6a0dad",
            color: "white",
            textTransform: "none",
            "&:hover": { bgcolor: "#5a0cac" },
          }}
        >
          Add to Expenses Report
        </Button>
      </Box>


      <Box display="flex" gap={2}>
        <Box sx={{ width: "40%", display: "flex", flexDirection: "column" }}>
          <Tabs
            value={activeTab}
            onChange={(e, value) => setActiveTab(value)}
            textColor="primary"
            indicatorColor="primary"
            sx={{ mb: 2 }}
          >
            <Tab label="All Document" value="all" sx={{ textTransform: "none" }} />
            <Tab label="Bills" value="bills" sx={{ textTransform: "none", fontWeight: "bold" }} />
            <Tab label="Receipts" value="receipts" sx={{ textTransform: "none" }} />
          </Tabs>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2, bgcolor: "white" }}>
            <List>
              {bills.map((bill) => (
                <ListItem
                  button
                  key={bill.id}
                  component="div"
                  onClick={() => setSelectedBill(bill)}
                  sx={{
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon>
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "#f0f0f5",
                        borderRadius: 2,
                      }}
                    >
                      <ReceiptIcon sx={{ color: "gray" }} />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: selectedBill?.id === bill.id ? "purple" : "black",
                          fontWeight: "bold",
                        }}
                      >
                        {bill.name}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="gray">
                        Date: {bill.date} <br /> {bill.amount}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        <Paper
          sx={{
            width: "60%",
            p: 3,
            textAlign: "center",
            bgcolor: "#FAEBC8",
            borderRadius: 3,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
            }}
          >
            <img
              src={InvoiceImage}
              alt="Invoice"
              style={{
                width: "100%",
                borderRadius: 8,
                objectFit: "contain",
              }}
            />
          </Box>
        </Paper>

      </Box>
    </Box>
  );
};

export default InvoiceDashboard;
