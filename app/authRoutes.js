module.exports = function(app, passport) {
    var express = require('express');
    var router = express.Router(); // get an instance of the express Router

    // ==================================================================== TUTORIAL TUTORIAL

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    // app.get('/', function(req, res) {
    //     res.render('index.ejs'); // load the index.ejs file
    // });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/login', function(req, res) {
    //     // render the page and pass in any flash data if it exists
    //     res.render('login.ejs', {
    //         message: req.flash('loginMessage')
    //     });
    // });

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

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    // app.get('/signup', function(req, res) {
    //     // render the page and pass in any flash data if it exists
    //     res.render('signup.ejs', {
    //         message: req.flash('signupMessage')
    //     });
    // });

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

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    // app.get('/profile', isLoggedIn, function(req, res) {
    // router.get('/profile', isLoggedIn, function(req, res) {
    //     res.render('profile.ejs', {
    //         user: req.user // get the user out of session and pass to template
    //     });
    // });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    // app.get('/logout', function(req, res) {
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // ==================================================================== TUTORIAL
    return router;
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
