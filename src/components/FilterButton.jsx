import { Button, Typography } from "@mui/material";

const FilterButton = ({ label, status, onClick }) => {
  if (status === 'active') {
    return (
      <Button
        style={{
          color: 'white',
          background: '#0070AC',
          height: 25,
          fontSize: '14px',
          borderRadius: 200,
          textTransform: 'none',
          marginRight: 24,
          marginBottom: 16,
          paddingRight: 12,
          paddingLeft: 12,
        }}
        onClick={onClick}>
        <Typography fontSize={12}>
          {label}
        </Typography>
      </Button>
    );
  }
  else if (status === 'inactive' || status === 'disabled') {
    return (
      <Button
        style={{
          color: status === 'disabled' ? '#abadb1' : '#B3ADBF',
          background: status === 'disabled' ? `red ` : '#EAEAEB',
          height: 25,
          fontSize: '14px',
          borderRadius: 200,
          textTransform: 'none',
          marginRight: 24,
          marginBottom: 16,
          paddingRight: 12,
          paddingLeft: 12,
        }}
        onClick={onClick}
        disabled={status === "disabled"}>
        {label}
      </Button>
    );
  }
  else
    return (
      <Button
        style={{
          color: 'black',
          background: 'red',
          height: 25,
          fontSize: '14px',
          borderRadius: 200,
          textTransform: 'none',
          //red only
          marginRight: 24,
          marginBottom: 16,
          paddingRight: 12,
          paddingLeft: 12,
        }}>
        {label}
      </Button>
    );
}

export default FilterButton;
