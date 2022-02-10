var gulp = require("gulp");
var pug = require("gulp-pug");
var plumber = require("gulp-plumber");
var config = require('../config').pug;
var notify = require('gulp-notify');
var data = require('gulp-data');

gulp.task("pug", function(){
  return gulp.src(config.src,{
    since: gulp.lastRun(pug)
  })
  .pipe(data(function(file){
      return { 'site': require('../../src/_data/site.json')};
  }))
      .pipe(plumber({
              errorHandler: notify.onError('<%= error.message %>')
          })) // エラーが発生しても処理を継続
      .pipe(pug(config.options))
      .pipe(gulp.dest(config.dest));
});
