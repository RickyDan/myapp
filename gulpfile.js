'use strict';

var gulp 	 	 = require('gulp'),
	sourcemap    = require('gulp-sourcemaps'),
	uglifyJs     = require('gulp-uglify'),
	sass  	     = require('gulp-sass'),
	uglifyCss    = require('gulp-uglifycss'),
	autoprefixer = require('gulp-autoprefixer'),
	combiner     = require('stream-combiner2'),
	watchPath    = require('gulp-watch-path');

var srcDir       = 'public';

//编译压缩js
gulp.task('build-js',function(){
	console.log("build js task");
	gulp.watch('public/**/*.js',function(event){
		var paths = watchPath(event,'public/','build/');
		var combined = combiner.obj([
			gulp.src(paths.srcPath), // src/file.js 
			uglifyJs(),
			gulp.dest(paths.distDir) // dist/ 
		]);
		combined.on('error', function (err) {
            console.log('--------------');
            console.log('Error');
            console.log('fileName: ' + err.fileName);
            console.log('lineNumber: ' + err.lineNumber);
            console.log('message: ' + err.message);
            console.log('plugin: ' + err.plugin);
        });
		console.log('js file change');
        console.log(event.type + ': ' + paths.srcPath);
        console.log('dist: ' + paths.distPath);
	});
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

gulp.task('default',['build-js','css-build']);
