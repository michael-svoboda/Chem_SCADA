import React, { useState } from 'react';
import { Card, Typography, Button, Box } from '@mui/material';
import DoughnutChart from './DoughnutChart';

const TopHalfModal = () => {
  const [buttonStates, setButtonStates] = useState({
    hydrogen: true,
    CO2: true,
    value16_2: true,
    mixedFeed: true,
  });

  const handleButtonClick = (buttonKey) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [buttonKey]: !prevButtonStates[buttonKey],
    }));
  };

  const leftHalfStyle = {
    flex: 0.5,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const cardStyle = {
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: '15px',
  };

  const titleTextStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'left',
  };

  const buttonStyle = {
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: 'white',
    textAlign: 'left',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const buttonWithChartStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const doughnutChartContainerStyle = {
    marginLeft: '10px',
  };

  return (
    <div style={leftHalfStyle}>
      <Card style={cardStyle}>
        <Typography id="transition-modal-title" variant="h6" component="h2" style={titleTextStyle}>
          Inlet:
        </Typography>
        <div style={buttonContainerStyle}>
          <Button
            variant="contained"
            className="align-left"
            style={{
              ...buttonStyle,
              ...buttonWithChartStyle,
              border: `2px solid ${buttonStates.hydrogen ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'}`,
              backgroundColor: buttonStates.hydrogen ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0)' ,
            }}
            onClick={() => handleButtonClick('hydrogen')}
          >
            <Box sx={{ width: '100%', textAlign: 'left' }}>Hydrogen</Box>
            <Box sx={doughnutChartContainerStyle}>
              <DoughnutChart />
            </Box>
          </Button>
          <Button
            variant="contained"
            style={{
              ...buttonStyle,
              ...buttonWithChartStyle,
              border: `2px solid ${buttonStates.CO2 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'}`,
              backgroundColor: buttonStates.CO2 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0)' ,
            }}
            onClick={() => handleButtonClick('CO2')}
          >
            <Box sx={{ width: '100%', textAlign: 'left' }}>CO2</Box>
            <Box sx={doughnutChartContainerStyle}>
              <DoughnutChart />
            </Box>
          </Button>
          <Button
            variant="contained"
            style={{
              ...buttonStyle,
              ...buttonWithChartStyle,
              border: `2px solid ${buttonStates.value16_2 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'}`,
              backgroundColor: buttonStates.value16_2 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0)' ,
            }}
            onClick={() => handleButtonClick('value16_2')}
          >
            <Box sx={{ width: '100%', textAlign: 'left' }}>16.2</Box>
            <Box sx={doughnutChartContainerStyle}>
              <DoughnutChart />
            </Box>
          </Button>
        </div>
      </Card>
      <Card style={cardStyle}>
        <Typography id="transition-modal-title" variant="h6" component="h2" style={titleTextStyle}>
          Outlet:
        </Typography>
        <div style={buttonContainerStyle}>
          <Button
            variant="contained"
            style={{
              ...buttonStyle,
              ...buttonWithChartStyle,
              border: `2px solid ${buttonStates.mixedFeed ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'}`,
              backgroundColor: buttonStates.mixedFeed ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0)' ,
              
            }}
            onClick={() => handleButtonClick('mixedFeed')}
          >
            <Box sx={{ width: '100%', textAlign: 'left' }}>Mixed Feed</Box>
            <Box sx={doughnutChartContainerStyle}>
              <DoughnutChart />
            </Box>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TopHalfModal;
