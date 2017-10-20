var path = require('path');				//nodejs默认modules
var gulp = require('gulp');			
var less = require('gulp-less');		//插件，编译less的
var csso = require('gulp-csso');		//插件，智能压缩css的
var concat = require('gulp-concat');	//插件，合并css的
var base64 = require('gulp-base64');	//插件，将图片换为base64的
 
 
//定义一个工作，编译less
gulp.task('lessc', function () {
  return gulp.src('./www/less/**/*.less')
	    .pipe(less())
	    .pipe(base64({
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes 
            debug: true
        }))
	    .pipe(gulp.dest('./www/less/css'));
});

//定义一个工作，处理css
gulp.task('css',["lessc"],function () {
  return gulp.src('./www/less/css/*.css')
	    .pipe(csso())   						//智能压缩css
	    .pipe(concat('all.min.css'))			//合并css
	    .pipe(gulp.dest('./www/dist'));
});

 
//定义一个工作，监听
gulp.task("watch",function(){
	gulp.watch('./www/less/**/*.less',["lessc",'css']);
});


//定义工作流
gulp.task("default",["lessc",'css',"watch"]);