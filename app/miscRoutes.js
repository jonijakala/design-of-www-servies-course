module.exports = function() {
    var express = require('express');
    var router = express.Router(); // get an instance of the express Router
    var User = require('./models/user');

    // middleware to use for all requests
    router.use(function(req, res, next) {
        next(); // make sure we go to the next routes and don't stop here
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)

    router.get('/', function(req, res) {
        if (req.user) {
            res.redirect("/user/" + req.user._id + '/#/profile');
        }
        res.sendfile('./public/splash.html');
    });

    router.get('/user/:uid', isLoggedIn, function(req, res) {
        // console.log(req.user); // undefined
        res.sendfile('./public/main.html');
    });

    // router.get('/profile', isLoggedIn, function(req, res) {
    //     // console.log(res.user);
    //     res.sendfile('./public/main.html');
    // });

    router.get('/intro', function(req, res) {
        res.sendfile('./public/splash.html');
    });

    router.get('/login', function(req, res) {
        res.sendfile('./public/register_login.html');
    });

    router.get('/public/:user_id', function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.redirect("/pub/" + req.params.user_id + "/#/profile?public");
        });
    });

    router.get('/pub/:user_id/', function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.sendfile('./public/main.html');
        });
    });

    return router;
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        console.log('isloggedin');
        // console.log('========REQ=========');
        // console.log(req);
        // console.log('========REQ.USER=========');
        // console.log(req.user);
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/login');
}
