require("require-dir")("./gulp/tasks", { recurse: true });
var gulp = require("gulp");

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("png:sprite", "svg:sprite"),
    gulp.parallel("renderHtml", "sass", "js:fundation", "copy:fonts", "img"),
    "webpack"
  )
);
gulp.task(
  "dev",
  gulp.series(
    "clean",
    gulp.parallel("png:sprite", "svg:sprite"),
    gulp.parallel("renderHtml", "sass", "js:fundation", "copy:fonts", "img"),
    "webpack"
  )
);

gulp.task(
  "default",
  gulp.series("clean", "dev", gulp.parallel("watch", "server"))
);
