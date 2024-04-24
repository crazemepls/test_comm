import React from "react";
import {  Box, Stack } from '@mui/material';
import DropdownSubMenu from "./DropdownSubmenu";

const DropdownDiv = () => {
  return (
    <Box
      style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20 }}
      boxShadow={'0 3px 2px -2px gray'}
      paddingY={4}
      paddingLeft={30}
      sx={{  display: { xs: 'none', md: 'flex' }}}
    >
      <Stack spacing={2} direction="row">
        <img src="https://ontego.de/images/commsult/logos/Ontego_subline.svg"></img>
        <Stack spacing={2} direction="column" >
          <DropdownSubMenu />
        </Stack>
      </Stack>

    </Box>
  );
};

export default DropdownDiv;