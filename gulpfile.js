/*
 * gulpfile.js
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var ghelper = require('gulp-helper');
ghelper.require();

var pkg = require('./package.json');
var ip = require('ip');

gulp.task('server', function() {
  express.run(['src/index.js']);
});

gulp.task('default', ['server']);
