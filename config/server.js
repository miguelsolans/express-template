/*
 * Server Configuration
 * Author: Miguel Solans
 * Notes: Load server modules and general setup
 */

// Loading modules
const createError   = require('http-errors');
// Express server
const express       = require('express');
const app           = express();
// Body Parser
const bodyParser    = require('body-parser');
// Morgan For Request Status
const logger        = require('morgan');
const path          = require('path');
// MongoDB
const mongoose      = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/HelloWorldDB', {
    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection to MongoDB successfully established")
    })
    .catch(() => {
        console.log("Couldn't connect to MongoDB");
    });

// Display Request Status
app.use( logger('dev') );

// Tell node where public files are located
app.use(express.static('./app/public'));

// Setup EJS View Engine
console.log(__dirname);
app.set('views', "./app/views/");
app.set('view engine', 'ejs');


// urlencoded tells body-parser to extract data from <from>
app.use(bodyParser.urlencoded({
    extended: true
}));

// To read it in JSON
app.use(bodyParser.json());

// Import Routes Interfaces
app.use('/', require('./routes'));

// Error Handler
app.use((err, req, res, next) => {
    // Catch error details
    res.status(err.status || 500);
    res.jsonp({
        title: err.title,
        message: err.message,
        stack: err
    });
});

// Module Export
module.exports = app;
