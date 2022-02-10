const { parallel } = require('gulp');
var gulp = require('gulp');

gulp.task('build',
    gulp.parallel('imagemin','styles','concat','pug', function(done){
      done();
    })
);

// gulpで処理しないファイルをコピー(movieやpdf,mp3など)
gulp.src(['./src/assets/**/**','!./src/assets/images/**/**.{jpg,png,gif,svg}','!./src/assets/style/**','!./src/assets/js/**'])
    .pipe(gulp.dest('./dest/assets'));
