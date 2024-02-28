const { useState, useEffect } = require('react');
const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    console.log('Fetched data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

module.exports = fetchData;
