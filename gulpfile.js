"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass'),
  react = require('gulp-react'),
	browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init(["app/"],{
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('gulp-react', function () {
    return gulp.src('app/bundle.jsx')
        .pipe(react())
        .pipe(gulp.dest('app/'));
});


//sass
gulp.task('gulp-sass', function () {
  gulp.src('app/assets/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'));
});


gulp.task('watch', function(){
  gulp.watch('app/bundle.jsx', ['gulp-react']);
	gulp.watch('app/assets/sass/*.sass', ['gulp-sass']);
});



gulp.task('default', ['browser-sync',  'watch', 'gulp-sass', 'gulp-react']);