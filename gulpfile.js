// gulpfile.js 
var gulp = require('gulp');
var server = require( 'gulp-develop-server' );
 
// default tasks to run on 'gulp'
gulp.task('default', ['server:start', 'server:restart']);


// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: './server.js' } );
});
 
// restart server if app.js changed 
gulp.task( 'server:restart', function() {
    gulp.watch( [ './server.js', './app/*.js', './app/**/*.js', './config/*.js'], server.restart );
});
