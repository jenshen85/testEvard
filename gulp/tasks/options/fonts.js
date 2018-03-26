var gulp = require("gulp");
var config = require("../../config.js");

gulp.task("copy:fonts", function() {
  return gulp
    .src(config.src.fonts + "/**/*.{ttf,eot,woff,woff2}")
    .pipe(gulp.dest(config.dest.fonts));
});

gulp.task("fonts:watch", function() {
  gulp.watch(
    config.src.fonts + "/**/*.{ttf,eot,woff,woff2}",
    gulp.series("copy:fonts")
  );
});
