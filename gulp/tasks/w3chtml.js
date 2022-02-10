const gulp = require('gulp');
const { htmlValidator } = require('gulp-w3c-html-validator');
var config = require('../config').html;

gulp.task('w3chtml', function(){
  return gulp.src(config.src)
  .pipe(htmlValidator.analyzer())
  .pipe(htmlValidator.reporter());
});
