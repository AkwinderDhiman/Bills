import React, { useState } from "react";
import {
  Box, Typography, Button, TextField,
  Checkbox, FormControlLabel, IconButton,
  Radio, RadioGroup, FormControl, Divider, Collapse, Fab, MenuItem, Select, Tabs, Tab
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PaymentDetails = () => {
  const [open, setOpen] = useState(true);
  const [paymentMode, setPaymentMode] = useState("");
  const [currency, setCurrency] = useState("");
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [lineItem, setLineItem] = useState("single");
  const [description, setDescription] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box
      sx={{
        width: 300,
        p: 2,
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}
    >

      <Box
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <img src="/quickbook-logo.png" alt="Quickbook" style={{ width: 30, height: 30 }} />
            <Box>
              <Typography fontSize={14} fontWeight="bold">Quickbook</Typography>
              <Typography fontSize={12} color="gray">16 June, 2024<br />8:15 PM</Typography>
            </Box>
          </Box>
          <Box>
            <Typography fontSize={12} fontWeight="bold" color="gray">Publishing...</Typography>
            <Typography fontSize={12} fontWeight="bold" color="gray">Jimmy Jason</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <FormControlLabel control={<Checkbox defaultChecked sx={{ color: "#6a0dad" }} />} label="Auto-sync" />
          <FormControlLabel control={<Checkbox defaultChecked sx={{ color: "#6a0dad" }} />} label="Save Config" />
        </Box>
      </Box>

      <Box display="flex" gap={2} p={1}>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} centered>
        <Tab label="Comment" />
        <Tab label="Query" />
      </Tabs>
      </Box>

      {tabIndex === 0 && (
        <>
          <Typography fontSize={12} fontWeight="bold" color="gray">Type Comment</Typography>
          <TextField fullWidth placeholder="Start typing..." variant="standard" />
          <Button variant="contained" fullWidth sx={{ bgcolor: "#E0E0E0", color: "gray", borderRadius: 2 }}>
            Add Comment
          </Button>
        </>
      )}
      <Button variant="contained" fullWidth sx={{ bgcolor: "#6a0dad", color: "white", borderRadius: 2 }}>
        View Line Items
      </Button>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton size="small">
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography fontSize={14} fontWeight="bold">Payment Details</Typography>
        <IconButton size="small">
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setOpen(!open)}
        sx={{ cursor: "pointer" }}
      >
        <Typography fontSize={14} fontWeight="bold">Payment Details</Typography>
        <IconButton size="small">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={open}>
        <Box display="flex" flexDirection="column" gap={2}>

          <FormControl>
            <RadioGroup row defaultValue="paid">
              <FormControlLabel value="paid" control={<Radio sx={{ color: "#6a0dad" }} />} label="Paid" />
              <FormControlLabel value="unpaid" control={<Radio sx={{ color: "#6a0dad" }} />} label="Unpaid" />
            </RadioGroup>
          </FormControl>
          <Divider />

          <Box>
            <Typography fontSize={12} color="gray">Bill Number</Typography>
            <TextField
              fullWidth
              placeholder="Start typing"
              variant="standard"
              InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
            />
            <Divider sx={{ my: 1 }} />
          </Box>
          <Box>
            <Typography fontSize={12} color="gray">Bill Date</Typography> <TextField
              fontWeight="bold"
              fullWidth
              placeholder="Start typing"
              variant="standard"
              InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
            />
            <Divider sx={{ my: 1 }} />
          </Box>
          <Box>
            <Typography fontSize={12} color="gray">Paid Amount</Typography>
            <Typography fontSize={16} fontWeight="bold" color="gray">£ 1900.00</Typography>
            <Divider sx={{ my: 1 }} />
          </Box>

          <Box>
            <Typography fontSize={12} color="gray">Paid Date</Typography> <TextField fontWeight="bold"
              fullWidth
              placeholder="Start typing"
              variant="standard"
              InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
            />
            <Divider sx={{ my: 1 }} />
          </Box>
          <Box>
            <Typography fontSize={12} color="gray">Due Date</Typography> <TextField fontWeight="bold"
              fullWidth
              placeholder="Start typing"
              variant="standard"
              InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
            />
            <Divider sx={{ my: 1 }} />
          </Box>
        </Box>
      </Collapse>
      <Box display="flex" flexDirection="column" gap={2}>

        <Box>
          <Typography fontSize={12} color="gray">Payment Mode</Typography>
          <Select
            fullWidth
            displayEmpty
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            sx={{ color: "gray" }}
          >
            <MenuItem value="" fontWeight="bold" >Select Payment Mode</MenuItem>
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
          </Select>
          <Divider sx={{ my: 1 }} />
        </Box>

        <Box>
          <Typography fontSize={12} color="gray">Currency</Typography>
          <Select
            fullWidth
            displayEmpty
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            sx={{ color: "gray" }}
          >
            <MenuItem value="" fontWeight="bold" >Select Currency</MenuItem>
            <MenuItem value="GBP">GBP (£)</MenuItem>
            <MenuItem value="USD">USD ($)</MenuItem>
            <MenuItem value="EUR">EUR (€)</MenuItem>
          </Select>
          <Divider sx={{ my: 1 }} />
        </Box>

        {["Bank Transaction Ref", "Total Amount", "Tax Amount", "Total Amount (GBP)", "Tax Amount (GBP)"].map((label, index) => (
          <Box key={index}>
            <Typography fontSize={12} color="gray">{label}</Typography> <TextField fontWeight="bold"
              fullWidth
              placeholder="Start typing"
              variant="standard"
              InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
            />
            <Divider sx={{ my: 1 }} />
          </Box>
        ))}

      </Box>

      <Box display="flex" flexDirection="column" gap={2}>

        <Box>
          <Typography fontSize={12} color="gray">FX Rate</Typography> <TextField fontWeight="bold"
            fullWidth
            placeholder="Start typing"
            variant="standard"
            InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
          />
          <Divider sx={{ my: 1 }} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          onClick={() => setDescriptionOpen(!descriptionOpen)}
          sx={{ cursor: "pointer" }}
        >
          <Typography fontSize={14} fontWeight="bold">Description</Typography>
          <IconButton size="small">
            {descriptionOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>

      </Box>

      <Collapse in={descriptionOpen}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography fontSize={12} color="gray">Line Item</Typography>
          <RadioGroup
            row
            value={lineItem}
            onChange={(e) => setLineItem(e.target.value)}
          >
            <FormControlLabel value="single" control={<Radio sx={{ color: "#6a0dad" }} />} label="Single" />
            <FormControlLabel value="multiple" control={<Radio sx={{ color: "#6a0dad" }} />} label="Multiple" />
          </RadioGroup>

          <Box>
            <Typography fontSize={12} color="gray">Description</Typography>
            <TextField
              fontWeight="bold"
              fullWidth
              placeholder="Enter Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputProps={{ disableUnderline: true, style: { fontSize: 14, color: "gray" } }}
            />
            <Divider sx={{ my: 1 }} />
          </Box>

        </Box>
      </Collapse>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <IconButton>
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <Box display="flex" alignItems="center" gap={0.5}>
          <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#6a0dad" }} />
          <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#E0E0E0" }} />
        </Box>
        <IconButton>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box display="flex" flexDirection="column" gap={1}>
        <Button variant="contained" fullWidth sx={{ backgroundColor: "#F3ECFE", color: "#6a0dad" }}>
          Save
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#6a0dad", color: "white" }}
          endIcon={<ExpandMore />}
        >
          Publish
        </Button>
      </Box>
      <Fab
        color="primary"
        size="medium"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#6a0dad",
          zIndex: 1000,
        }}
      >
        <GroupsIcon />
      </Fab>

    </Box>
  );
};

export default PaymentDetails;
