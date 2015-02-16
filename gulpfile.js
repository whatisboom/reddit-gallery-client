var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    watch('./src/assets/js/**/*.js', function(files, cb) {
        gulp.start('js');
    });
    watch('./src/assets/html/**/*.html', function(files, cb) {
        gulp.start('html');
    });
});

gulp.task('html', function() {
    gulp.src('./src/assets/html/**/*.html')
        .pipe(gulp.dest('./dist/assets/html/'));
})

gulp.task('js', function() {
    gulp.src('./src/assets/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/assets/js/'));
});