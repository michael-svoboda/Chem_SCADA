// Overview.js
import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const Overview = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ marginTop: '80px', padding: '20px' }}>
      <img src={process.env.PUBLIC_URL + '/page1.png'} alt="Page 1" />

      <div
        className="button-container" // Add a class for styling, you can adjust the styles in the CSS file
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        <CyclingButton isHovered={isButtonHovered} onClick={handleOpen} setIsHovered={setIsButtonHovered} />




      </div>
    </div>
  );
};

export default Overview;
