// // LeftHalfModal.jsx
// import React from 'react';
// import { Card, Typography, Button, Box } from '@mui/material';
// import DoughnutChart from './DoughnutChart';

// const LeftHalfModal = ({ buttonData }) => {
//   const cardStyle = {
//     border: '2px solid rgba(255, 255, 255, 0.3)',
//     backgroundColor: 'rgba(255, 255, 255, 0)', // White background with 50% opacity
//     padding: '15px',
//   };

//   const titleTextStyle = {
//     color: 'rgba(255, 255, 255, 0.8)', // White text with 80% opacity
//     textAlign: 'left',
//   };

//   const buttonStyle = {
//     border: '2px solid rgba(255, 255, 255, 0.8)',
//     backgroundColor: 'rgba(255, 255, 255, 0.04)', // White background with 4% opacity
//     color: 'white', // White text
//     textAlign: 'left',
//   };

//   const buttonWithChartStyle = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const doughnutChartContainerStyle = {
//     marginLeft: '10px', // Adjust the spacing as needed
//   };

//   return (
//     <div>
//       {buttonData.map((button, index) => (
//         <Card key={index} style={cardStyle}>
//           <Typography id={`transition-modal-title-${index}`} variant="h6" component="h2" style={titleTextStyle}>
//             {button.title}
//           </Typography>
//           <div style={{ ...buttonWithChartStyle, ...buttonStyle }}>
//             <Box sx={{ width: '100%', textAlign: 'left' }}>{button.label}</Box>
//             <Box sx={doughnutChartContainerStyle}>
//               <DoughnutChart />
//             </Box>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default LeftHalfModal;
