import React, { useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ContactsIcon from "@mui/icons-material/Contacts";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Sidebar = () => {
  const [active, setActive] = useState("Accounting");

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Accounting", icon: <SettingsIcon />, path: "/accounting" },
    { text: "Banking", icon: <AccountBalanceIcon />, path: "/banking" },
    { text: "Reports", icon: <DescriptionOutlinedIcon />, path: "/reports" },
    { text: "Contacts", icon: <ContactsIcon />, path: "/contacts" },
    { text: "Invoicing", icon: <ReceiptIcon />, path: "/invoicing" },
    { text: "Queries", icon: <HelpOutlineOutlinedIcon />, path: "/queries" },
  ];

  const bottomMenuItems = [
    { text: "Help", icon: <HelpOutlineOutlinedIcon />, path: "/help" },
  ];

  return (
    <Box
      sx={{
        width: "80px",
        backgroundColor: "#594b9a",
        color: "#fff",
        height: "100vh",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50px", height: "50px", mb: 2 }}>
        <img src="" alt="EasyBills Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </Box>

      <List sx={{ width: "100%", padding: 0, flexGrow: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              flexDirection: "column",
              textAlign: "center",
              padding: "10px 0",
              backgroundColor: active === item.text ? "#8673e9" : "transparent",
              borderRadius: "5px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#6a5acd" },
            }}
            onClick={() => setActive(item.text)}
          >
            <ListItemIcon sx={{ color: "white", minWidth: "unset" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                color: "white",
                fontSize: "12px",
                "& .MuiTypography-root": { fontSize: "10px", textAlign: "center" }
              }}
            />
          </ListItem>
        ))}
      </List>

      <List sx={{ width: "100%", padding: 0, mt: "auto" }}>
        {bottomMenuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              flexDirection: "column",
              textAlign: "center",
              padding: "10px 0",
              backgroundColor: active === item.text ? "#8673e9" : "transparent",
              borderRadius: "5px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#6a5acd" },
            }}
            onClick={() => setActive(item.text)}
          >
            <ListItemIcon sx={{ color: "white", minWidth: "unset" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                color: "white",
                fontSize: "12px",
                "& .MuiTypography-root": { fontSize: "10px", textAlign: "center" },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
