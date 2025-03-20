import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from "@mui/material";

const invoiceData = {
  company: "Marble BEAUTY & SPA",
  invoiceNumber: "#12345",
  date: "00/00/00",
  client: {
    name: "Business Company 123",
    address: "Grand Avenue, 29102",
    country: "Country +00 000 000",
    cif: "0000000ABC",
  },
  items: [
    { description: "Service description", price: "00,00€", qty: 1, total: "00,00€" },
    { description: "Service description", price: "00,00€", qty: 1, total: "00,00€" },
    { description: "Service description", price: "00,00€", qty: 1, total: "00,00€" },
    { description: "Service description", price: "00,00€", qty: 1, total: "00,00€" },
    { description: "Service description", price: "00,00€", qty: 1, total: "00,00€" },
  ],
  paymentMethod: "By Bank London State Bank LNS-00 1234 5678 9101 1121",
  subtotal: "00,00€",
  tax: "00,00€",
  total: "00,00€",
};

const Invoice = () => {
  return (
    <Box minHeight="100vh" display="flex" justifyContent="center">
      <Paper sx={{ width: "500px", p: 4, borderRadius: 2 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h4" fontWeight="bold" color="#007b7f">
            INVOICE
          </Typography>
          <Typography fontWeight="bold" color="#007b7f">
            {invoiceData.company}
          </Typography>
        </Box>

        <Divider sx={{ my: 2, borderStyle: "dotted" }} />

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Box>
            <Typography fontWeight="bold" color="#007b7f">Bill to</Typography>
            <Typography color="#007b7f">{invoiceData.client.name}</Typography>
            <Typography color="#007b7f">{invoiceData.client.address}</Typography>
            <Typography color="#007b7f">{invoiceData.client.country}</Typography>
            <Typography color="#007b7f">{invoiceData.client.cif}</Typography>
          </Box>
          <Box textAlign="right">
            <Typography fontWeight="bold" color="#007b7f">Invoice</Typography>
            <Typography color="#007b7f">{invoiceData.invoiceNumber}</Typography>
            <Typography fontWeight="bold" color="#007b7f">Date</Typography>
            <Typography color="#007b7f">{invoiceData.date}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderStyle: "dotted" }} />

        <TableContainer component={Paper} sx={{ boxShadow: "none", background: "transparent" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#007b7f" }}><b>Description</b></TableCell>
                <TableCell sx={{ color: "#007b7f" }}><b>Price</b></TableCell>
                <TableCell sx={{ color: "#007b7f" }}><b>Qty</b></TableCell>
                <TableCell sx={{ color: "#007b7f" }}><b>Total</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceData.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "#007b7f" }}>{item.description}</TableCell>
                  <TableCell sx={{ color: "#007b7f" }}>{item.price}</TableCell>
                  <TableCell sx={{ color: "#007b7f" }}>{item.qty}</TableCell>
                  <TableCell sx={{ color: "#007b7f" }}>{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 2, borderStyle: "dotted" }} />

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Box>
            <Typography fontWeight="bold" color="#007b7f">Payment method</Typography>
            <Typography color="#007b7f">{invoiceData.paymentMethod}</Typography>
          </Box>
          <Box textAlign="right">
            <Typography color="#007b7f">Subtotal: {invoiceData.subtotal}</Typography>
            <Typography color="#007b7f">Tax: {invoiceData.tax}</Typography>
            <Typography fontWeight="bold" color="#007b7f">Total: {invoiceData.total}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderStyle: "dotted" }} />

        <Typography fontWeight="bold" mt={2} color="#007b7f">
          Terms & conditions
        </Typography>
        <Typography variant="body2" color="#007b7f">
          The origins of the first civilizations date back to their beliefs, experiences, creations, or other
          recognitions of constraints that changed over time.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Invoice;