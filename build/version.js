(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task(
    'bump',
    gulp.parallel(function() {
      gulp
        .src(['./*.json'])
        .pipe($.bump())
        .pipe(gulp.dest('./'));
    })
  );
})();
