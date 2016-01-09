// gulpfile.js 
var gulp = require('gulp');
var server = require('gulp-develop-server');
var sass = require('gulp-sass');
// var browserSync = require('browser-sync');

// default tasks to run on 'gulp'
gulp.task('default', ['server:start', 'watch']);

// run server 
gulp.task('server:start', function() {
    server.listen({
        path: './server.js'
    });
});

// restart server if app.js changed 
// gulp.task('server:restart', function() {
//     gulp.watch(['./server.js', './app/*.js', './app/**/*.js', './config/*.js'], server.restart);
// });

// Compile SASS files
gulp.task('sass', function() {
    gulp.src('./public/sass/importer.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass', function() {
    return gulp.src('./public/sass/importer.scss') // Gets all files ending with .scss in app/scss
        // return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
        // .pipe(browserSync.reload({
        //     stream: true
        // }));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('public/sass/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    // gulp.watch(['public/*.html', 'public/app/*/*.html'], browserSync.reload);
    // gulp.watch(['public/app/**/*.js', 'public/js/*.js'], browserSync.reload);
    gulp.watch(['./server.js', './app/*.js', './app/**/*.js', './config/*.js'], server.restart);
});

// gulp.task('sass:watch', function() {
//     gulp.watch('./public/sass/*.scss', ['sass']);
// });

// gulp.task('browserSync', function() {
//     browserSync.init(null, {
//         proxy: "localhost:8080"
//     });
//     // browserSync.init({
//     //     port: 8080,
//     //     server: {
//     //         baseDir: './public/'
//     //     },
//     // });
// });
