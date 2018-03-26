var gulp = require("gulp"),
  gulpWebpack = require("webpack-stream"),
  notify = require("gulp-notify"),
  plumber = require("gulp-plumber"),
  config = require("../../config"),
  webpackConfig = require("../../../webpack.config");

gulp.task("webpack", function() {
  return gulp
    .src(config.src.js + "/app.js")
    .pipe(
      plumber({
        errorHandler: notify.onError(function(error) {
          return {
            title: "Scripts",
            message: error.message
          };
        })
      })
    )
    .pipe(gulpWebpack({config : webpackConfig}))
    .pipe(gulp.dest(config.dest.js));
});

gulp.task("webpack:watch", function() {
  gulp.watch(config.src.js + "/**/*.js", gulp.series("webpack"));
});
