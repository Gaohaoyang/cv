var gulp = require("gulp");
var sass = require('gulp-ruby-sass');
// var minifyCss = require('gulp-minify-css');
// var jshint = require('gulp-jshint');
// var uglify = require('gulp-uglify');

// 配置 Sass 编译
gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('css'));
});

gulp.task('watchSassBuild',function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

// 自动编译 Sass
gulp.task('asb',['sass','watchSassBuild']);