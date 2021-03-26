"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
sass.compiler = require("node-sass");

gulp.task('default', watch);

function compileSass() {
  return gulp
    .src("scss/app.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(minify())
    .pipe(gulp.dest("dist/css"));
}
function compileJs() {
  return gulp.src(['js/**/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

function watch() {
  gulp.watch("scss/**/*.scss", compileSass);
  gulp.watch("js/**/*.js", compileJs);
}