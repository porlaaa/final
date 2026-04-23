require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middlewares/globalErrorHandler.js');
const createHttpError = require('http-errors');
const app = express();

const PORT = config.PORT;
connectDB();

// Root Endpoint
app.get('/', (req, res) => {
    // const err = createHttpError(404, 'something went wrong!');
    // throw err;

    res.json({ message: 'Hello from POS Server!' });
});

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`);
});