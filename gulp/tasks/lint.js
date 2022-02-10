const { parallel } = require('gulp');
var gulp = require('gulp');

gulp.task('lint',
  gulp.parallel('w3chtml',
  function(done){
    done();
  })
);
