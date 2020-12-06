const express = require('express');
const app = express();
const morgan = require('morgan');
// const mongoose = require('mongoose');


// logging message and body parser
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// handling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


// handle errors (not found)
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


// handle errors (operational errors)
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message 
        }
    });
});



// server
const port = process.env.PORT || 3000;
app.listen(port);