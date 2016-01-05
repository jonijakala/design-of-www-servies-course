module.exports = function() {
    var express = require('express');
    var router = express.Router(); // get an instance of the express Router

    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        console.log('Something is happening. AngularRoutes');
        next(); // make sure we go to the next routes and don't stop here
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)

    router.get('/kissa', function(req, res) {
        res.sendfile('./public/index.html');
    });

    router.get('/intro', function(req, res) {
        res.sendfile('./public/splash.html');
    });

    router.get('/login', function(req, res) {
        res.sendfile('./public/register_login.html');
    });

    return router;
};