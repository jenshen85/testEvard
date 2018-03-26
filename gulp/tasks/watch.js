var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', gulp.parallel(
    'pug:watch',
    'sass:watch',
    'fonts:watch',
    'img:watch',
    "png:sprite:watch",
    "svg:sprite:watch",
    'webpack:watch'
));