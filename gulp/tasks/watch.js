var gulp = require('gulp');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var config = require('../config').watch;


gulp.task('watch', function () {
    // js
    watch(config.js, gulp.series('concat','bs-reload'));

    // style
    watch(config.sass,gulp.series('styles','bs-reload'));

    // imgmin
    watch(config.imgmin,gulp.series('imagemin','bs-reload'));

    // pug
    watch(config.pug, gulp.series('pug','w3chtml','bs-reload'));

});
