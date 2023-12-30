import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const MethSynth = () => {
  const [hoveredButtonID, setHoveredButtonID] = useState(null); // Track which button is hovered

  const handleButtonMouseEnter = (buttonID) => {
    setHoveredButtonID(buttonID); // Set the ID of the hovered button
  };

  const handleButtonMouseLeave = () => {
    setHoveredButtonID(null); // Reset to null when mouse leaves any button
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ marginTop: '9%', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
      <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/meth-synth.jpg'} alt="Page 1" />

      <div
        className="button-container1"
        style={{
          position: 'absolute',
          top: '30%',
          left: '70%',
          width: '100px',
          height: '50px',
          border: '2px solid black',
          //backgroundColor: hoveredButtonID === 'button1' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button1')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <CyclingButton isHovered={hoveredButtonID === 'button1'} onClick={handleOpen} setIsHovered={() => {}} />
      </div>

      <div
        className="button-container2"
        style={{
          position: 'absolute',
          top: '90%',
          left: '10%',
          width: '100px',
          height: '50px',
          border: '2px solid black',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button2')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <CyclingButton isHovered={hoveredButtonID === 'button2'} onClick={handleOpen} setIsHovered={() => {}} />
      </div>
    </div>
  );
};

export default MethSynth;