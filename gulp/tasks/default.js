var gulp = require('gulp');

gulp.task('beforeDefault',
  gulp.series('build','lint')
);

gulp.task('default',
  gulp.parallel('beforeDefault','browser-sync','watch',function(done){
    done();
  }));
