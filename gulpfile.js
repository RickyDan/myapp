'use strict';

var gulp 	 	 = require('gulp'),
	sourcemap    = require('gulp-sourcemaps'),
	uglifyJs     = require('gulp-uglify'),
	sass  	     = require('gulp-sass'),
	uglifyCss    = require('gulp-uglifycss'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('minifyjs',function(){
		gulp.src('public/js/*.js')
			.pipe(uglifyJs())
			.pipe(gulp.dest('./build/js/'));
});

//编译压缩sass
gulp.task('sass',function(){
	console.log("压缩css");
	return gulp.src('public/sass/**/*.scss')
		.pipe(sourcemap.init())
		.pipe(autoprefixer({
			browsers: ['>1%','IE 7'],
			cascade: false
		}))
		.pipe(sass().on('error',sass.logError))
		.pipe(uglifyCss())
		.pipe(gulp.dest('./build/css'))
});

gulp.watch('public/**/*.js',['minifyjs','sass']).on('change',function(event){
	console.log('File ' + event.path + 'was ' + event.type + ', running tasks...');
});
