module.exports = function(app, passport) {
    // frontend routes =========================================================
    // route to handle all angular requests
    // app.get('*', function(req, res) {
    //     res.sendfile('./public/index.html');
    // });


    app.use('/api', require('./apiRoutes')());
    app.use('/', require('./angularRoutes')());
    app.use('/auth', require('./authRoutes')(passport));
};
