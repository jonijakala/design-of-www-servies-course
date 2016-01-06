module.exports = function(app, passport) {
    // load all routes here
    app.use('/', require('./miscRoutes')());
    app.use('/api', require('./apiRoutes')());
    app.use('/auth', require('./authRoutes')(app, passport));
};
