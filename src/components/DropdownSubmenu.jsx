import React from "react";
import { Box } from "@mui/material";
const DropdownSubMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <a href="#">Features</a>
          <ul class="dropdown">
            <Box>
            <li><a href="#">User Experience</a></li>
            <li><a href="#"> Template principle</a></li>
            <li><a href="#"> SAP integration</a></li>
            <li><a href="#"> Offline & Sync+</a></li>
            <li><a href="#"> Ontego Designer</a></li>
            </Box>
          </ul>
        </li>
        <li>
          <a href="#">Areas Of Application</a>
          <ul class="dropdown" style={{marginLeft:'26em'}}>
            <li><a href="#">Warehouse logistics</a></li>
            <li><a href="#">production</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#"> Service management</a></li>
            <li><a href="#">maintenance</a></li>
            <li><a href="#"> other areas</a></li>
          </ul>
        </li>
        <li><a href="#">Mobile Devices</a></li>
      </ul>
    </div>
  );
};

export default DropdownSubMenu;