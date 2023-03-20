require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/database');
const corsOptions = require('./config/cors');
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/car');

connectDB();

app.use(corsOptions)
app.use(express.json());

app.use(authRoutes);
app.use(carRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));