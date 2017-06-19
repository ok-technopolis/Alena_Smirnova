const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const rebaseUrls = require('gulp-css-rebase-urls');

gulp.task('sass', () =>
    gulp.src('./dev/styles/default.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rebaseUrls())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./prod/styles'))
);

gulp.task('sass:watch', ['sass'], () =>
    gulp.watch('./dev/styles/**/*.scss', ['sass'])
);

// common
gulp.task('build', ['sass']);
gulp.task('default', ['sass:watch']);

