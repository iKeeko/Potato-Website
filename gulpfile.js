const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
prefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/main-styles.scss')
  .pipe(sass())
  .pipe(prefixer())
  .pipe(gulp.dest('app/assets/styles'))
  .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], function() {
  browserSync.init({
    server: './app'
  });

  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/assets/scripts/*.js').on('change', browserSync.reload);
});

gulp.task('start', ['watch']);
