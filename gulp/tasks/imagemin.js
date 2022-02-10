var gulp = require('gulp');
var imagemin = require("gulp-imagemin");
var config = require('../config').imagemin;

gulp.task('imagemin', function(){
  return  gulp.src(config.src,{
      since: gulp.lastRun(imagemin)
    })
        .pipe(imagemin({
          progressive: true
        }))
        .pipe(gulp.dest(config.dest));
    gulp.src(config.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest));
});
