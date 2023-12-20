import React, { useState } from 'react';
import { Modal, Fade, Backdrop, Box, Typography } from '@mui/material';

const CyclingButton = ({ isHovered, isClicked, setIsHovered }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsHovered(false); // Reset isHovered to false
    setIsModalOpen(false);
  };

  const getDashArrayLength = () => {
    const rectWidth = 100; // Adjust based on the rectangle's dimensions
    const rectHeight = 100;
    const perimeter = 2 * (rectWidth + rectHeight);
    return perimeter;
  };

  const dashArrayLength = 10;
  const animationDuration = 1; // Adjust the duration
  const dashArrayCycleLength = dashArrayLength * 2;

  const buttonStyle = {
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out', // Adjust the transition duration and easing function
  };

  const modalStyle = {
    position: 'absolute',
    top: '53.5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Include 10% padding on each side
    height: '73%', // Include 10% padding on each side
    bgcolor: 'rgba(10, 10, 10, 0.6)', // Dark grey slate color with 60% opacity
    border: '2px solid silver', // Silver borders
    boxShadow: 24,
    p: 4,
    borderRadius: '12px', // Rounded corners
    transition: 'opacity 0.3s ease-in-out', // Adjust the transition duration and easing function
    opacity: isModalOpen ? 1 : 0,
    color: 'white', // White text
  };
  


  return (
    <>
      <svg width="100" height="100" viewBox="-2 -2 100 100" style={buttonStyle} onClick={handleButtonClick}>
        <rect
          width="96%"
          height="96%"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeDasharray={`${dashArrayLength} ${dashArrayLength}`}
          strokeLinecap="round"
          rx="8"
          ry="8"
        >
          <animate
            attributeName="stroke-dashoffset"
            from={dashArrayCycleLength}
            to="0"
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      <Modal open={isModalOpen} onClose={handleCloseModal} BackdropComponent={Backdrop}>
        <Fade in={isModalOpen}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CyclingButton;
