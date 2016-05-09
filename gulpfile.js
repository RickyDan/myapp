'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass  = require('gulp-sass');

gulp.task('minifyjs',function(){
		gulp.src('public/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./build/js/'));
});

gulp.task('sass',function(){
	return gulp.src('public/sass/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./build/css'))
});