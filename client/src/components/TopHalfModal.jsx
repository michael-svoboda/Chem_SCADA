// TopHalfModal.jsx
import React from 'react';
import { Card, Typography, Button, Box } from '@mui/material';
import DoughnutChart from './DoughnutChart';

const TopHalfModal = () => {
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
          <Button variant="contained" className="align-left" style={{ ...buttonStyle, ...buttonWithChartStyle }}>
            <Box sx={{ width: '100%', textAlign: 'left' }}>Hydrogen</Box>
            <Box sx={doughnutChartContainerStyle}>
              <DoughnutChart />
            </Box>
          </Button>
          <Button variant="contained" style={{ ...buttonStyle, ...buttonWithChartStyle }}>
            <Box sx={{ width: '100%', textAlign: 'left' }}>CO2</Box>
            <Box sx={doughnutChartContainerStyle}>
              <DoughnutChart />
            </Box>
          </Button>
          <Button variant="contained" style={{ ...buttonStyle, ...buttonWithChartStyle }}>
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
          <Button variant="contained" style={{ ...buttonStyle, ...buttonWithChartStyle }}>
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
