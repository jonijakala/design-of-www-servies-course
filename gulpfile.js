// gulpfile.js 
var gulp = require('gulp');
var server = require('gulp-develop-server');
var sass = require('gulp-sass');

// default tasks to run on 'gulp'
gulp.task('default', ['server:start', 'server:restart', 'sass', 'sass:watch']);

// run server 
gulp.task('server:start', function() {
    server.listen({
        path: './server.js'
    });
});

// restart server if app.js changed 
gulp.task('server:restart', function() {
    gulp.watch(['./server.js', './app/*.js', './app/**/*.js', './config/*.js'], server.restart);
});

// Compile SASS files
gulp.task('sass', function() {
    gulp.src('./public/sass/importer.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./public/sass/*.scss', ['sass']);
});
