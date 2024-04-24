import React, { useState } from "react";
import { Typography, Slider, Box, Input, Grid } from "@mui/material";

const SliderFilter = ({ variant, min, max, onSliderChange }) => {
  const [value, setValue] = useState([min, max]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom textAlign={'center'}>
        {variant === 'price' ? ' List Price' : 'Weight'}
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item paddingRight={1}>
          <Input
            value={value[0]}
            size="small"
            disabled
            sx={{ width: 44 }}
            inputProps={{
              style: {
                textAlign: 'center'
              }
            }}
          />
          {variant === 'price' ? '€' : 'G'}
        </Grid>
        <Grid item xs paddingRight={1}>
          <Slider
            min={variant === "weight" ? 35 : 0}
            max={variant === "weight" ? 1300 : 3500}
            value={value}
            onChange={(e) => {
              const newValue = e.target.value
              onSliderChange({ variant, newValue });
              handleSliderChange(e, e.target.value)
            }}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value[1]}
            size="small"
            disabled
            sx={{ width: 44 }}
            inputProps={{
              style: {
                textAlign: 'center'
              }
            }}
          />
          {variant === 'price' ? '€' : 'G'}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderFilter;