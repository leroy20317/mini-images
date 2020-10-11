const apiKey = "JKb1RnZyhl6TMfGj4sfSZh2NhphPcLmm";
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const tinyNokey = require('gulp-tinypng-nokey');
const tiny = require('gulp-tinypng-compress');

gulp.task('tinypng', function (done) {
  gulp.src('./entry/**/*.{png,jpg,jpeg}')
    .pipe(tiny({
      key: apiKey,
      log: true
    }))
    .pipe(gulp.dest('./tinypng'));
  done()
});

gulp.task('tinypng-nokey', function (done) {
  gulp.src('./entry/**/*.{png,jpg,jpeg}')
    .pipe(tinyNokey())
    .pipe(gulp.dest('./tinypng-nokey'));
  done()
});

// 压缩图片(Version>3)
gulp.task('minify-images', function (done) {
  gulp.src('./entry/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('./minify'));
  done();
});

gulp.task('default', gulp.series(gulp.parallel('minify-images')), function () {
  console.log("----------gulp Finished----------");
  // Do something after a, b, and c are finished.
});
