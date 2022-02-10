var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));;
var sassGlob = require('gulp-sass-glob');
var config = require('../config').sass;
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('styles', function(){
  return gulp.src(config.src,{
    since: gulp.lastRun(sass)
  })
    .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded',
      compass : true
    })).on('error', sass.logError)
    .pipe(gulp.dest(config.dest));
});
