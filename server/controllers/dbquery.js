const { connectToDatabase } = require('./databaseConnector');

// Function to execute a SELECT query
const executeQuery = async (query) => {
    // Connect to the database
    const client = connectToDatabase();

    try {
        // Execute the query
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error; // Rethrow the error to handle it elsewhere
    } finally {
        // Close the client connection
        await client.end();
    }
};

// Example usage:
const getUsers = async () => {
    const query = 'SELECT * FROM users';
    try {
        const users = await executeQuery(query);
        console.log('Users:', users);
    } catch (error) {
        console.error('Error getting users:', error);
    }
};

// Example usage:
const queryStreamData = async (streamNumber) => {
    const query = `SELECT * FROM tableone WHERE "Stream Number" = ${streamNumber};`;
    try {
        const data = await executeQuery(query);
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};






module.exports = { queryStreamData };


