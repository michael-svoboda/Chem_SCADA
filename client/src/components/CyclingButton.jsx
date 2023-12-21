
import React, { useState } from 'react';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import EquipmentModal from './EquipmentModal';

const CyclingButton = ({ isHovered, setIsHovered }) => {
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

      <EquipmentModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default CyclingButton;
