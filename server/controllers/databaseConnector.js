const { Client } = require('pg');

// Function to create and connect the database client
const connectToDatabase = () => {
    // Initialize the client with your database connection configuration
    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "Dav1decek!",
        database: "Capstone"
    });

    // Connect to the database
    client.connect()
        .then(() => {
            console.log('Connected to the database');
        })
        .catch(err => {
            console.error('Error connecting to the database:', err);
        });

    // Return the connected client
    return client;
};

module.exports = { connectToDatabase };