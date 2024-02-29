import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Link } from 'react-router-dom';
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
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '53.3%',
          left: '2.5%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('FromTK04')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/electrolyzer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'FromTK04'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '62.8%',
          left: '2.5%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('FromDR01')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'FromDR01'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '44.8%',
          left: '3.3%',
          width: '7.5%',
          height: '5.5%',
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
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '76.8%',
          left: '88.3%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToBA01')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/rwproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToBA01'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
  className="button-container7"
  style={{
    padding: '1px',
    position: 'absolute',
    top: '90.5%',
    left: '85.8%',
    width: '10.5%',
    height: '7.5%',
    border: '2px solid red',
  }}
  onMouseEnter={() => handleButtonMouseEnter('oxycomb')}
  onMouseLeave={handleButtonMouseLeave}
>
  <CyclingButton isHovered={hoveredButtonID === 'oxycomb'} onClick={handleOpen} setIsHovered={() => {}} />
  <span style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    fontSize: '13px',
    color: 'red', // Making the font color red
  }}>Live Data</span>
</div>



    </div>
    
  );
};

export default MethSynth;