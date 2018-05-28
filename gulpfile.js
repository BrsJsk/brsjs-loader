const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const uglifyJS = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('css', function () {
    return gulp.src('src/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(uglifyJS())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'js']);