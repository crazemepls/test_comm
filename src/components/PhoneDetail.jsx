import React from "react";
import { Typography, Box, Stack, IconButton, Button } from "@mui/material";
import FilterButton from "./FilterButton";
import { OPERATION_AREA_FILTER } from "../constants";
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PhoneDetail = ({ selectedPhoneData, style, onClose }) => {
  const phoneData = selectedPhoneData

  return (
    <div>
      <Box width={'60vw'} style={style} sx={{float:'left'}}>
        <div style={{ float: 'right' }} >
          <IconButton onClick={onClose} sx={{ "&:hover": { backgroundColor: "transparent" } }}><CloseIcon /></IconButton>
        </div>
        <Stack direction='row' width={'60vw'}>
          <img
            style={{
              width: '15vw',
              objectFit: 'contain',
              objectPosition: 'top',
              verticalAlign: 'top'
            }}
            src={phoneData.imgUrl}
            alt="phone image"
          />
          <Box width={'70%'} marginLeft={4} marginRight={4}>
            <Typography fontSize={20} paddingBottom={1}>
              {phoneData.name}
            </Typography>
            <Typography fontSize={14}>
              {/* can change this to dynamic */}
              Display: 3 Inch
            </Typography>
            <Typography fontSize={14}>
              Price : {phoneData.price} Euro
            </Typography>
            <Typography fontSize={14}>
              Weight : {phoneData.weight} Gram
            </Typography>
            <Typography fontSize={14} sx={{ paddingBottom: 2 }}>
              Available accessories: SE4100, SE4710 or SE55 1D/2D extended range scanning module, 4 or 8 GB RAM, support up to Android 14, Wi-FI 6, 5G (ET45), 8"/10" (optional), IP65, 7600mAh removable battery
            </Typography >
            <FilterButton

              label={OPERATION_AREA_FILTER.filter(operation_area=>operation_area.id===phoneData.operationArea)[0].label}
              status={'inactive'}
            />
          </Box>

          <Box width={'70%'} sx={{ borderColor: '#009AD3', borderWidth: 4, padding: 4, lineHeight: 2 }}>
            <Typography fontSize={14} color={'#009AD3'} fontWeight={'bold'} paddingBottom={2}>
              Our assessment
            </Typography>
            <Typography flexWrap={'wrap'} color={'#009AD3'} lineHeight={1.6}>
              The TC21 (WLAN version) or the TC26 (with mobile phone option) is the entry-level device with an imager for simple applications in warehouse, production or delivery. The improved optional handle now also allows use of the rear camera. TC26 also communicates via mobile communications and is therefore interesting for outdoor use.
            </Typography>
          </Box>
        </Stack>
        <div style={{ float: 'right', marginTop: 24 }} >
          <Button style={{
            fontSize: '14px',
            borderRadius: 200,
            textTransform: 'none',
          }} sx={{ "&:hover": { backgroundColor: "transparent", textDecoration: 'underline' } }} >
            <Typography flexWrap={'wrap'} color={'#009AD3'} fontWeight={'bold'} >
              To the manufacturer
            </Typography><ArrowRightAltIcon /></Button>
        </div>
      </Box>

    </div>
  );
};

export default PhoneDetail;