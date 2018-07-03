const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create(),
prefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/main-styles.scss')
  .pipe(sass())
  .pipe(prefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('app/assets/styles'))
  .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], function() {
  browserSync.init({
    notify: false,
    server: './app'
  });

  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/assets/scripts/*.js').on('change', browserSync.reload);
});

gulp.task('start', ['watch']);


// BUILD JS

const imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify-es').default;

gulp.task('optimizedImages', function() {
  return gulp.src('./app/assets/images/*')
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('delete', function() {
  return del('./docs');
});

gulp.task('cssMinify', function() {
  return gulp.src('./app/assets/styles/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('./docs/assets/styles'));
});

gulp.task('uglifyJS', function() {
  return gulp.src('./app/assets/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./docs/assets/scripts'));
});


gulp.task('build', [ 'delete', 'optimizedImages', 'cssMinify', 'uglifyJS'], function() {
  return gulp.src('./app/*.html')
  .pipe(gulp.dest('./docs'));
});
