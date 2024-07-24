const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const entryRoutes = require('./routes/entryRoutes');
const doNotRecommendRoutes = require('./routes/doNotRecommendRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/entries', entryRoutes);
app.use('/api/donotrecommend', doNotRecommendRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
