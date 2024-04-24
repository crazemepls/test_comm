import React from "react";
import { Grid  } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const PhoneGrid = ({ phoneData, index, onSelect }) => {
  return (
    <Grid item width={'14.25vw'}>
      <Card onClick={() => onSelect(phoneData)}>
        <CardMedia
          component="img"
          height="255"
          image={phoneData.imgUrl}
          alt="phone image"
        />
        <CardContent sx={{ paddingX: 1 }}>
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
            {phoneData.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>


  );
};

export default PhoneGrid;