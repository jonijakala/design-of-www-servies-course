module.exports = function(app, passport) {
    var express = require('express');
    var router = express.Router(); // get an instance of the express Router


    // LOGIN ===============================
    // process the login form
    // app.post('/login', passport.authenticate('local-login', {
    router.post('/login', passport.authenticate('local-login', {
        // successRedirect: '/profile', // redirect to the secure profile section
        successRedirect: '/auth/signup-succee', // redirect to the secure profile section
        // failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureRedirect: '/auth/login-error-json', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    router.get('/login-error-json', function(req, res) {
        res.json({
            message: req.flash('loginMessage')
        });
    });

    // SIGNUP ==============================
    // process the signup form
    // app.post('/signup', passport.authenticate('local-signup', {
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/auth/signup-succee', // redirect to the secure profile section
        // successRedirect: '/profile', // redirect to the secure profile section
        // failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureRedirect: '/auth/signup-error-json', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // router.route('/signup-error-json') 
    router.get('/signup-error-json', function(req, res) {
        // .get(function(req, res) {
        res.json({
            message: req.flash('signupMessage')
        });
        // res.json(req);
    });

    router.get('/signup-succee', function(req, res) {
        res.json({
            message: 'success',
            url: '/'
        });
    });

    // LOGOUT ==============================
    // app.get('/logout', function(req, res) {
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
};