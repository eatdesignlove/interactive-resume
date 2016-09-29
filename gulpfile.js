'use strict';

// 필요한 의존 모듈 로드
var gulp = require('gulp');
var sass = require('gulp-sass');

// 기본 업무 등록
gulp.task('default', [
  'compile:css',
  'watch'
]);

// 관찰 업무 등록
gulp.task('watch', function(){
  gulp.watch('./src/**/*.{sass,scss}', ['compile:css']);
})

// compile:css
gulp.task('compile:css', function(){
  return gulp.src('./src/sass/**/*.{sass,scss}')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./dist/'+ 'css'));
});
