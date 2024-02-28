import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Link } from 'react-router-dom';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const Overview = () => {
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
      <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/page1.jpg'} alt="Page 1" />

      <div
        className="button-container1"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '38.15%',
          left: '31.00%',
          width: '13.5%',
          height: '16.1%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button1')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'button1'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container2"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '71.25%',
          left: '68.8%',
          width: '13.5%',
          height: '16.1%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button2')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/methanolsynthesis" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'button2'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>
      
      

      <div
        className="button-container3"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '71.25%',
          left: '10.95%',
          width: '13.5%',
          height: '16.1%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button3')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/rwproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'button3'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container4"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '71.25%',
          left: '31.00%',
          width: '13.5%',
          height: '16.1%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button4')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/electrolyzer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'button4'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container5"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '38.15%',
          left: '54.2%',
          width: '13.5%',
          height: '16.1%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button5')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'button5'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default Overview;