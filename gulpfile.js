'use strict';

var gulp = require('gulp');

gulp.task('lesspass', [], function () {
    return gulp.src(['node_modules/lesspass-pure/dist/**/*'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', [], function () {
    return gulp.src(['images/**/*'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', [], function () {
    gulp.start('lesspass', 'images');
});

gulp.task('default', ['build'], function () {

});
