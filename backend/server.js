// Import necessary modules
const express = require('express'); // Import Express for server functionality
const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection
const cors = require('cors'); // Import CORS for handling cross-origin requests
const dotenv = require('dotenv'); // Import dotenv to manage environment variables
const connectDB = require('./config/db'); // Import the function to connect to MongoDB
const entryRoutes = require('./routes/entryRoutes'); // Import routes for entries
const doNotRecommendRoutes = require('./routes/doNotRecommendRoutes'); // Import routes for "do not recommend" items
const imageRoutes = require('./routes/imageRoutes'); // Import routes for images

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define API routes
app.use('/api/entries', entryRoutes); // Routes for entries
app.use('/api/donotrecommend', doNotRecommendRoutes); // Routes for "do not recommend" items
app.use('/api/images', imageRoutes); // Routes for images

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
