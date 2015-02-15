var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('watch', function() {
	watch('./src/assets/js/**/*.js', function(files, cb) {
		gulp.start('js');
	});
});

gulp.task('js', function() {
	gulp.src('./src/assets/js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/assets/js/'));
});