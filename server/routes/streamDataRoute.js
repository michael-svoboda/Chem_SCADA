// streamDataRoute.js

const express = require('express');
const router = express.Router();
const { queryStreamData } = require('../controllers/dbquery.js'); // Adjust import path



// Define the route handler function
const fetchStreamData = async (req, res) => {
    const streamNumber = req.query.stream;
    try {
        const data = await queryStreamData(streamNumber);
        res.json(data); // Send the fetched data as JSON response
    } catch (error) {
        console.error('Error fetching stream data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Set up an endpoint to call the database query function
router.get('/stream-data', fetchStreamData);

module.exports = router;
