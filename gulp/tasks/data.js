var gulp = require('gulp');
var plumber = require('gulp-plumber');
var data = require('gulp-data');
var config = require('../config').data;

gulp.task('data',function(){
    gulp.src(config.src).pipe( data( function (file) {
        return { 'site': require(config.lead)};
    }) );
});
