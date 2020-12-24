const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const asnRoutes = require('./api/routes/asn');

// logging message and body parser
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://ryan:ryanrap@asn-shard-00-00.xwixw.mongodb.net:27017,asn-shard-00-01.xwixw.mongodb.net:27017,asn-shard-00-02.xwixw.mongodb.net:27017/test?ssl=true&replicaSet=atlas-nrs48e-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;


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

// Routes
app.use('/asn/', asnRoutes);

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
const port = process.env.PORT || 8000;
app.listen(port);