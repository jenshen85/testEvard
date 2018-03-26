var gulp = require("gulp"),
  pug = require("gulp-pug"),
  plumber = require("gulp-plumber"),
  notify = require("gulp-notify"),
  gulpIf = require("gulp-if"),
  config = require("../../config");

gulp.task("renderHtml", function() {
  return gulp
    .src([config.src.templates + "/pages/[^_]*.pug"])
    .pipe(
      plumber({
        errorHandler: notify.onError(function(error) {
          return {
            title: "Templates",
            message: error.message
          };
        })
      })
    )
    .pipe(pug(gulpIf(config.dev, { pretty: true })))
    .pipe(gulp.dest(config.dest.html));
});

gulp.task("pug:watch", function() {
  gulp.watch([config.src.templates + "/**/*.pug"], gulp.series("renderHtml"));
});
