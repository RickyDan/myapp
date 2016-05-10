'use strict';

var gulp 	 	 = require('gulp'),
	sourcemap    = require('gulp-sourcemaps'),
	uglifyJs     = require('gulp-uglify'),
	sass  	     = require('gulp-sass'),
	uglifyCss    = require('gulp-uglifycss'),
	autoprefixer = require('gulp-autoprefixer');

var srcDir       = 'public';

//编译压缩js
gulp.task('build-js',function(){
		gulp.src('public/js/*.js')
			.pipe(uglifyJs())
			.pipe(gulp.dest('./build/js/'));
});

//编译压缩sass
gulp.task('css-build',function(){
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

//监测js和sass的文件变动
gulp.task('watch',function(){
	gulp.watch(srcDir + '/sass/*.scss',['css-build']);
	gulp.watch(srcDir + '/js/*.js',['build-js']);
});

gulp.task('default',['watch']);
