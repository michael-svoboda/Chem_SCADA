import React from 'react';
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const BottomHalfModal = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const buttonStyle = {
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: 'white',
    textAlign: 'left',
  };

  const titleTextStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'left',
  };

  return (
   
      <Card
        style={{
          flex: 1, // Take up the entire space
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center', // Align items vertically in the center
          padding: '20px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0)',
        }}
      >
    <ThemeProvider theme={darkTheme}>
        <Typography
          id="property-label"
          variant="h6"
          component="h2"
          style={{ ...titleTextStyle, flex: '0 0 auto', marginRight: '10px' }}
        >
          Property:
        </Typography>

        {/* Dropdown for Property */}
        <FormControl style={{ flex: '1', marginRight: '10px' }}>
          <InputLabel id="property-dropdown-label">Select Property</InputLabel>
          <Select labelId="property-dropdown-label" id="property-dropdown">
            <MenuItem value="Flowrate">Flowrate</MenuItem>
            <MenuItem value="Temperature">Temperature</MenuItem>
            <MenuItem value="Pressure">Pressure</MenuItem>
          </Select>
        </FormControl>

        {/* Button with ellipsis (...) */}
        <Button variant="outlined" style={{ ...buttonStyle, flex: '0 0 auto', marginRight: '10px' }}>
          ...
        </Button>

        {/* Button with plus (+) */}
        <Button variant="outlined" style={{ ...buttonStyle, flex: '0 0 auto', marginRight: '10px' }}>
          +
        </Button>

        {/* Button with minus (-) */}
        <Button variant="outlined" style={{ ...buttonStyle, flex: '0 0 auto', marginRight: '10px' }}>
          -
        </Button>

        {/* Dropdown for Unit Type */}
        <FormControl style={{ flex: '1', marginRight: '10px' }}>
          <InputLabel id="unit-type-dropdown-label">Unit Type</InputLabel>
          <Select labelId="unit-type-dropdown-label" id="unit-type-dropdown">
            <MenuItem value="Unit1">Unit 1</MenuItem>
            <MenuItem value="Unit2">Unit 2</MenuItem>
            <MenuItem value="Unit3">Unit 3</MenuItem>
          </Select>
        </FormControl>

        {/* Dropdown for Streams */}
        <FormControl style={{ flex: '1' }}>
          <InputLabel id="streams-dropdown-label">Streams</InputLabel>
          <Select labelId="streams-dropdown-label" id="streams-dropdown">
            <MenuItem value="Stream1">Stream 1</MenuItem>
            <MenuItem value="Stream2">Stream 2</MenuItem>
            <MenuItem value="Stream3">Stream 3</MenuItem>
          </Select>
        </FormControl>
    </ThemeProvider>
    </Card>
    
  );
};

export default BottomHalfModal;
