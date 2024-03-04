
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



const BottomHalfModal = ({property, setProperty, setTimes, times, setRange, range, setStream, stream, stream2, setStream2, property2, setProperty2}) => {

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
    setProperty([]);
    setProperty2([]);
    fetchData(selectedProperty);
  };

  const handleStreamChange = (event) => {
    const streamNumber = parseInt(event.target.value)
    setStream(streamNumber);
    fetchData(selectedProperty);
  };

  const handleStream2Change = (event) => {
    const streamNumber2 = parseInt(event.target.value)
    setStream2(streamNumber2);
    fetchData(selectedProperty);
   
  };

  const handlePropertyChange = (event) => {

    setSelectedProperty(event.target.value);
    fetchData(event.target.value); // Call fetchData when button is clicked
    
  };

  const fetchData = async (value) => {
    
    try {
      const response1 = await axios.get(`http://localhost:3001/api/stream-data?stream=${stream}`); // Make API call to backend
      console.log('Fetched data:', response1.data); // Print response data to console

      const extractedProperty1 = response1.data.map(entry => entry[value]);
      const extractedTimes = response1.data.map(entry => entry['Time']);
      setProperty(extractedProperty1);


      const response2 = await axios.get(`http://localhost:3001/api/stream-data?stream=${stream2}`); // Make API call to backend
      console.log('Fetched data:', response2.data); // Print response data to console

      const extractedProperty2 = response2.data.map(entry => entry[value]);
      setProperty2(extractedProperty2);


      // console.log('Extracted Property:', extractedProperty);
      // if (propNum == 1) {
      //   setProperty(extractedProperty);
      // } else {
      //   setProperty2(extractedProperty);
      // }
      // console.log('State variable Property:', property);

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
        <FormControl style={{ flex: '0 0 400px', marginRight: '10px' }}>
          <InputLabel id="property-dropdown-label">Select Property</InputLabel>
          <Select 

            labelId="property-dropdown-label"
            id="property-dropdown"
            value={selectedProperty}
            onChange={handlePropertyChange} // Link the event handler to the onChange event
          
          >

            <MenuItem value="Mass Flow [kg/h]">Mass Flowrate in kg/h</MenuItem>
            <MenuItem value="Temperature [C]">Temperature in deg C</MenuItem>
            <MenuItem value="Pressure [kPaa]">Pressure in kPaa</MenuItem>
            <MenuItem value="Molar Flow [kmol/h]">Molar Flowrate in mol/hr</MenuItem>
            <MenuItem value="Vapor Volume Fraction">Vapor Volume Fraction in %</MenuItem>

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
        <FormControl style={{ flex: '0 0 200px', marginRight: '10px' }}>
          < TextField labelId="time-range-dropdown-label" placeholder="Time Range (Hours)" onChange={handleRangeChange} value={range} type='number' label='Set Time Range (Hours)'>
          </TextField>
        </FormControl>

        {/* Dropdown for Streams */}
        <FormControl style={{ flex: '0 0 200px', marginRight: '10px' }}>
          < TextField labelId="stream-dropdown-label" placeholder="Stream Number" onChange={handleStreamChange} value={stream} type='number' label='Stream Number'>
          </TextField>
        </FormControl>

        {/* Dropdown for Streams */}
        <FormControl style={{ flex: '0 0 200px', marginRight: '10px' }}>
          < TextField labelId="stream-dropdown-label2" placeholder="Stream Number2" onChange={handleStream2Change} value={stream2} type='number' label='Stream Number2'>
          </TextField>
        </FormControl>

    </ThemeProvider>
    </Card >
    
  );
};

export default BottomHalfModal;
