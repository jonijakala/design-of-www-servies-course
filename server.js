// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
// config files
var db = require('./config/db');
var port = process.env.PORT || 8080; // set our port

// configuration ===========================================


mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded

// app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// var router = require('./app/routes')(app);
// app.use('/api', require('./app/apiRoutes')());
// app.use('/', require('./app/angularRoutes')());

// Error Handling
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
// });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// app.use('/api', router);
// require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; // expose app
