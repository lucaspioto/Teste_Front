"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require('gulp-minify');

sass.compiler = require("node-sass");

gulp.task('default', watch);

gulp.task("sass", compilaSass);

function compilaSass() {
  return gulp
    .src("scss/app.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(minify())
    .pipe(gulp.dest("dist/css"));
}

function watch() {
  gulp.watch("scss/**/*.scss", compilaSass);
}