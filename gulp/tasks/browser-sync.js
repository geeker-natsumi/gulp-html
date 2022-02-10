var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('browser-sync',function(){
  browserSync({
    server: {
      baseDir: config.dest
    }
  });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});
