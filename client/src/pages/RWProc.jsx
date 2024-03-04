import React, { useState } from 'react';
import './Overview.css'; // Assuming you have a CSS file for styling
import CyclingButton from '../components/CyclingButton';
import { Link } from 'react-router-dom';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const RWProc = () => {
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
      <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/river-water.jpg'} alt="Page 1" />

      <div
        className="button-container1"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '83.25%',
          left: '2.8%',
          width: '7.5%',
          height: '7.0%',
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
          top: '74.25%',
          left: '2.8%',
          width: '7.5%',
          height: '7.0%',
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
          top: '95.25%',
          left: '2.8%',
          width: '7.5%',
          height: '7.0%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('button3')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'button3'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>
      

      <div
        className="button-container4"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '58.85%',
          left: '89.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToV05')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/electrolyzer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToV05'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container5"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '69.7%',
          left: '89.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToTK1')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToTK1'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container6"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '52.3%',
          left: '89.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToB1')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/oxycombustionproc" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToB1'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
        
      </div>
        

      <div
        className="button-container7"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '45.9%',
          left: '89.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('ToE13')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/methanolsynthesis" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'ToE13'} onClick={handleOpen} setIsHovered={() => {}} />
        </Link>
      </div>

      <div
        className="button-container7"
        style={{
          padding: '1px',
          position: 'absolute',
          top: '38.9%',
          left: '89.8%',
          width: '7.5%',
          height: '5.5%',
          border: '2px solid blue',
          //backgroundColor: hoveredButtonID === 'button2' ? 'yellow' : 'transparent', // Change the background color based on hover
        }}
        onMouseEnter={() => handleButtonMouseEnter('FromV10')}
        onMouseLeave={handleButtonMouseLeave}
      >
        <Link to="/electrolyzer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CyclingButton isHovered={hoveredButtonID === 'FromV10'} onClick={handleOpen} setIsHovered={() => {}} />
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

export default RWProc;