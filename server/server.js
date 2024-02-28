const express = require('express');
const app = express();
const cors = require('cors');
const streamDataRoute = require('./routes/streamDataRoute');

app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from this origin only
  }));

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api', streamDataRoute); // Mount the streamDataRoute at /api/stream-data

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const { Client } = require('pg');
// const express = require('express');
// const { Pool } = require('pg');
// const app = express();
// const port = 3001;

// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "Dav1decek!",
//     database: "Capstone",
    
//      // Ensure that this is a string
// });

// app.get('/api/data', async (req, res) => {
//     try {
//       const client = await pool.connect();
//       const result = await client.query('SELECT * FROM tableone');
//       const data = result.rows;
//       client.release();
//       res.json(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });