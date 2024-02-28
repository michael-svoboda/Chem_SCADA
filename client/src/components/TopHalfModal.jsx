import React, { useState } from 'react';
import { Card, Typography, TextField, FormControl } from '@mui/material';

const TopHalfModal = () => {
  // const [inputValues, setInputValues] = useState({
  //   hydrogen: '',
  //   CO2: '',
  //   value16_2: '',
  //   stream1: '',
  //   stream2: '',
  //   stream3: '',
  // });

  // const handleInputChange = (inputKey, value) => {
  //   setInputValues((prevInputValues) => ({
  //     ...prevInputValues,
  //     [inputKey]: value,
  //   }));
  // };

  // const leftHalfStyle = {
  //   flex: 0.5,
  //   padding: '15px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '10px',
  // };

  // const cardStyle = {
  //   border: '2px solid rgba(255, 255, 255, 0.3)',
  //   backgroundColor: 'rgba(255, 255, 255, 0)',
  //   padding: '15px',
  // };

  // const titleTextStyle = {
  //   color: 'rgba(255, 255, 255, 0.8)',
  //   textAlign: 'left',
  // };

  // const inputContainerStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '10px',
  // };

  // const whiteTextStyle = {
  //   color: 'white',
  // };

  // return (
  //   <div style={leftHalfStyle}>
  //     <Card style={cardStyle}>
  //       <Typography id="transition-modal-title" variant="h6" component="h2" style={titleTextStyle}>
  //         StreamList:
  //       </Typography>
  //       <div style={inputContainerStyle}>
  //         <FormControl style={{ flex: '1', marginRight: '10px' }}>
  //           <TextField
  //             label="Stream Number 2"
  //             InputLabelProps={{ style: whiteTextStyle }} // Apply white style to input label
  //             InputProps={{ style: whiteTextStyle }} // Apply white style to input text
  //             placeholder="Stream Number"
  //             onChange={(e) => handleInputChange('stream1', e.target.value)}
  //             value={inputValues.stream1}
  //             type='number'
  //           />
  //         </FormControl>
  //         <FormControl style={{ flex: '1', marginRight: '10px' }}>
  //           <TextField
  //             label="Stream Number 3"
  //             InputLabelProps={{ style: whiteTextStyle }} // Apply white style to input label
  //             InputProps={{ style: whiteTextStyle }} // Apply white style to input text
  //             placeholder="Stream Number"
  //             onChange={(e) => handleInputChange('stream2', e.target.value)}
  //             value={inputValues.stream2}
  //             type='number'
  //           />
  //         </FormControl>
  //         <FormControl style={{ flex: '1', marginRight: '10px' }}>
  //           <TextField
  //             label="Stream Number 4"
  //             InputLabelProps={{ style: whiteTextStyle }} // Apply white style to input label
  //             InputProps={{ style: whiteTextStyle }} // Apply white style to input text
  //             placeholder="Stream Number"
  //             onChange={(e) => handleInputChange('stream3', e.target.value)}
  //             value={inputValues.stream3}
  //             type='number'
  //           />
  //         </FormControl>
  //         {/* Additional text fields can be added similarly */}
  //       </div>
  //     </Card>
  //     {/* You can keep the Outlet section if needed */}
  //   </div>
  // );
};

export default TopHalfModal;
