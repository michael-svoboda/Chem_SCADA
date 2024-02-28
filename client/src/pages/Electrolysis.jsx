import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Link } from 'react-router-dom';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const Electrolysis = () => {
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
      <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/electrolyzer.jpg'} alt="Page 1" />

      <div
        className="button-container7"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '32.0%',
          left: '87.8%',
          width: '7.5%',
          height: '7%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToB01')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToB01'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container8"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '44.5%',
          left: '87.8%',
          width: '7.5%',
          height: '7%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToK04')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/methanolsynthesis" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToK04'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container9"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '104.5%',
          left: '2.8%',
          width: '7.5%',
          height: '7%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('FromP09')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/rwproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'FromP09'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container10"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '114.5%',
          left: '3.8%',
          width: '7.5%',
          height: '7%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToTK04')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/rwproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToTK04'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

    </div>
  );
};

export default Electrolysis;