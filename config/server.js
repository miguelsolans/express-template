// Loading modules
// Express server
const express       = require('express');
const app           = express();
// Body Parser
const bodyParser    = require('body-parser'); // to handle form posts
// MongoDB
const mongoose      = require('mongoose');

// Tell node where public files are located
app.use(express.static('./app/public'));

// Setup EJS View Engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// urlencoded tells body-parser to extract data from <from>
app.use(bodyParser.urlencoded({
    extended: true
}));

// To read it in JSON
app.use(bodyParser.json());

// Define Routes
const FilmesRoutes = require('../app/routes/index');

// Webapp Filmes Routes
app.use('/', FilmesRoutes);

// If any error occurs
app.use(function(req, res) {
    res.render('404');
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
});

// Module Export
module.exports = app;