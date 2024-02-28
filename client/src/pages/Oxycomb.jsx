import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Link } from 'react-router-dom';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const Oxycomb = () => {
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
      <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/oxycombustion.jpg'} alt="Page 1" />

      <div
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '100.8%',
          left: '89.3%',
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
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '100.5%',
          left: '2.8%',
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
          top: '36.8%',
          left: '89.3%',
          width: '7.5%',
          height: '7%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToK03')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/methanolsynthesis" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToK03'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '75.5%',
          left: '2.8%',
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
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '68.1%',
          left: '2.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('FromTK08')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/electrolyzer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'FromTK08'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>
    

      <div
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '50.9%',
          left: '2.8%',
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
          top: '39.5%',
          left: '2.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToBA01')}
        onMouseLeave={handleButtonMouseLeave}
        >
        <Link to="/rwproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'FromP09'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>
      
      <div
        className="button-container7"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '55.5%',
          left: '25.8%',
          width: '10.5%',
          height: '20.5%',
          border: '2px solid red',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('oxycomb')}
        onMouseLeave={handleButtonMouseLeave}
      >

        <CyclingButton isHovered={hoveredButtonID === 'oxycomb'} onClick={handleOpen} setIsHovered={() => {}} />
        
      </div>


    </div>
  );
};

export default Oxycomb;