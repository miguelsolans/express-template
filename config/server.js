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
const RootRoutes = require('../app/routes/index');

// Webapp Filmes Routes
app.use('/', RootRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Module Export
module.exports = app;
