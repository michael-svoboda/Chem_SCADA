
import React, { useState } from 'react';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import EquipmentModal from './EquipmentModal';
import axios from 'axios'; // Import Axios for making API calls

import {
  Card,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  createTheme,
  ThemeProvider,
  TextField,
} from '@mui/material';



const BottomHalfModal = ({property, setProperty, setTimes, times, setRange, range, setStream, stream, }) => {

  const [selectedProperty, setSelectedProperty] = useState('');

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

  const handleRangeChange = (event) => {
    const num = parseFloat(event.target.value)
    setRange(num);
   
    
  };

  const handleStreamChange = (event) => {
    const streamNumber = parseInt(event.target.value)
    setStream(streamNumber);
   
  };

  const handleStream2Change = (event) => {
    const streamNumber = parseInt(event.target.value)
    setStream(streamNumber);
   
  };

  const handlePropertyChange = (event) => {

    setSelectedProperty(event.target.value);
    fetchData(event.target.value); // Call fetchData when button is clicked
    
  };


  const fetchData = async (value) => {
    
    try {
      const response = await axios.get(`http://localhost:3001/api/stream-data?stream=${stream}`); // Make API call to backend
      console.log('Fetched data:', response.data); // Print response data to console

      const extractedProperty = response.data.map(entry => entry[value]);

      const extractedTimes = response.data.map(entry => entry['Time']);

      console.log('Extracted Property:', extractedProperty);
      setProperty(extractedProperty);
      console.log('State variable Property:', property);

      console.log('Extracted Times:', extractedTimes);
      setTimes(extractedTimes);
      console.log('State variable Times:', times);
    } catch (error) {
      console.error('Error fetching stream data:', error);
    }
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
          <Select 

            labelId="property-dropdown-label"
            id="property-dropdown"
            value={selectedProperty}
            onChange={handlePropertyChange} // Link the event handler to the onChange event
          
          >

            <MenuItem value="Mass Flow [kg/h]">Mass Flowrate</MenuItem>
            <MenuItem value="Temperature [C]">Temperature</MenuItem>
            <MenuItem value="Pressure [kPaa]">Pressure</MenuItem>
            <MenuItem value="Molar Flow [kmol/h]">Molar Flowrate</MenuItem>
            <MenuItem value="Vapor Volume Fraction">Vapor Volume Fraction</MenuItem>

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
          < TextField labelId="time-range-dropdown-label" placeholder="Time Range (Hours)" onChange={handleRangeChange} value={range} type='number' label='Set Time Range (Hours)'>
          </TextField>
        </FormControl>

        {/* Dropdown for Streams */}
        <FormControl style={{ flex: '1', marginRight: '10px' }}>
          < TextField labelId="stream-dropdown-label" placeholder="Stream Number" onChange={handleStreamChange} value={stream} type='number' label='Stream Number'>
          </TextField>
        </FormControl>

        {/* Dropdown for Streams */}
        <FormControl style={{ flex: '1', marginRight: '10px' }}>
          < TextField labelId="stream-dropdown-label2" placeholder="Stream Number2" onChange={handleStream2Change} value={stream} type='number' label='Stream Number3'>
          </TextField>
        </FormControl>


    </ThemeProvider>
    </Card>
    
  );
};

export default BottomHalfModal;
