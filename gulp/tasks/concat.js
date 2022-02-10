var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config').js;


gulp.task('concat', function () {
	return gulp.src(config.src,{
    since: gulp.lastRun(concat)
  })
	.pipe(concat('script.js'))
	.pipe(gulp.dest(config.dest))
	;
});
