// Import necessary modules
const express = require('express'); // Import Express for server functionality
const dotenv = require('dotenv'); // Import dotenv to manage environment variables
const connectDB = require('./config/db'); // Import the function to connect to MongoDB
const entryRoutes = require('./routes/entryRoutes'); // Import routes for entries
const doNotRecommendRoutes = require('./routes/doNotRecommendRoutes'); // Import routes for "do not recommend" items

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define API routes
app.use('/api/entries', entryRoutes); // Routes for entries
app.use('/api/donotrecommend', doNotRecommendRoutes); // Routes for "do not recommend" items

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));