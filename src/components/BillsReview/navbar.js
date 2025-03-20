import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Nav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none", padding: "10px 0px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>Review</Typography>
          <Select
            defaultValue="Google"
            sx={{
              border: "1px solid #8A63D2",
              borderRadius: "6px",
              height: 32,
              fontSize: 14,
              color: "black",
              backgroundColor: "white",
            }}
          >
            <MenuItem value="Google">Google</MenuItem>
          </Select>
          <Button variant="contained" sx={{ backgroundColor: "#E6F5EE", color: "#36D399", textTransform: "none", fontWeight: "bold" }}>
            Quickbook’s Data
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", borderRadius: "8px", padding: "4px" }}>
            <SearchIcon />
          </IconButton>
          <Button variant="contained" sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", textTransform: "none", borderRadius: "8px", fontWeight: "bold" }}>
            Export to Excel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", textTransform: "none", borderRadius: "8px", fontWeight: "bold" }}>
            Add Document
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", textTransform: "none", borderRadius: "8px", fontWeight: "bold" }}>
            Connect <KeyboardArrowDownOutlinedIcon />
          </Button>
          <IconButton sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", borderRadius: "8px", padding: "4px" }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", borderRadius: "8px", padding: "4px" }}>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton sx={{ backgroundColor: "#F3EBFF", color: "#8A63D2", borderRadius: "8px", padding: "4px" }}>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;