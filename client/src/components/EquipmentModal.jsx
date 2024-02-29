
import React, { useState } from 'react';
import { Backdrop, Box, Fade, Modal, Typography, Card, Button } from '@mui/material';
import LineChart from './LineChart'; // Import the LineChart component
import DoughnutChart from './DoughnutChart';
import TopHalfModal from './TopHalfModal';
import BottomHalfModal from './BottomHalfModal';


const EquipmentModal = ({  isModalOpen, handleCloseModal}) => {

  
  const [streamName, setStreamName] = useState('40% Product Split to Mixer');
  const [property, setProperty] = useState([]);
  const [times, setTimes] = useState([]);
  const [range, setRange] = useState(1);
  const [stream, setStream] = useState(1);
  const [stream2, setStream2] = useState(2);
  

  const modalStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '73%',
    bgcolor: 'rgba(10, 10, 10, 0.8)',
    border: '2px solid silver',
    boxShadow: 24,
    borderRadius: '12px',
    transition: 'opacity 0.3s ease-in-out',
    opacity: isModalOpen ? 1 : 0,
    color: 'white',
    overflow: 'hidden', // Prevent content overflow
    padding: '10px'
  };

  const leftHalfStyle = {
    flex: 0.5,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const rightHalfStyle = {
    flex: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
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

  const topHalfStyle = {
    flex: 0.8, // Adjust the ratio as needed
    display: 'flex',
    flexDirection: 'row',
  };

  const bottomHalfStyle = {
    flex: 0.2, // Adjust the ratio as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '15px'
  };

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal} BackdropComponent={Backdrop}>
      <Fade in={isModalOpen}>
        <Box sx={modalStyle}>
          <Box style={topHalfStyle}>
            <TopHalfModal />
            <div style={topHalfStyle}>
              <LineChart property={property} times={times} range={range} stream = {stream} stream2={stream2}/>
            </div>
          </Box>
          <Box style={bottomHalfStyle}>
          <BottomHalfModal setProperty={setProperty} setTimes={setTimes} setRange={setRange} range={range} setStream={setStream} stream={stream} setStream2={setStream2} stream2={stream2}/>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EquipmentModal;


