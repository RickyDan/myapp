'use strict';

var gulp 	 	 = require('gulp'),
	sourcemap    = require('gulp-sourcemaps'),
	uglifyJs     = require('gulp-uglify'),
	sass  	     = require('gulp-sass'),
	uglifyCss    = require('gulp-uglifycss'),
	autoprefixer = require('gulp-autoprefixer'),
	combiner     = require('stream-combiner2'),
	color        = require('gulp-color'),
	watchPath    = require('gulp-watch-path');

var srcDir       = 'public';

//文件变动信息输出和报错机制
function changeFile(combined,paths,event){
	combined.on('error', function (err) {
		console.log('--------------');
		console.log('Error');
		console.log('fileName: ' + err.fileName);
		console.log('lineNumber: ' + err.lineNumber);
		console.log('message: ' + err.message);
		console.log('plugin: ' + err.plugin);
	});
	console.log(color('sass file change','red'));
	console.log(color(event.type + ': ' + paths.srcPath, 'green'));
	console.log(color('dist: ' + paths.distPath,'green'));
}
//编译压缩js
gulp.task('build-js',function(){
	console.log("build js task");
	gulp.watch('src/**/*.js',function(event){
		var paths = watchPath(event,'src/','build/');
		var combined = combiner.obj([
			gulp.src(paths.srcPath), // src/file.js 
			uglifyJs(),
			gulp.dest(paths.distDir) // dist/ 
		]);
		changeFile(combined,paths,event);
	});
});

//编译压缩sass
gulp.task('css-build',function(){
	console.log("压缩css");
	gulp.watch('src/**/*.scss',function(event){
		var paths = watchPath(event,'src/','build/');
		var combined = combiner.obj([
			gulp.src(paths.srcPath),
			sourcemap.init(),
			autoprefixer({
				browsers: ['>1%','IE 7'],
				cascode: false
			}),
			sass(),
			uglifyCss(),
			gulp.dest(paths.distDir)
		]);
		changeFile(combined,paths,event);
	});
});

gulp.task('default',['build-js','css-build']);
