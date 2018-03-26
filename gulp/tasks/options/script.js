var gulp = require("gulp"),
  gulpIf = require("gulp-if"),
  sourcemaps = require("gulp-sourcemaps"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  config = require("../../config"),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename");

gulp.task("js:fundation", function () {
  return gulp.src(config.src.js + "/vendor/*.js")
    .pipe(gulpIf(config.dev, sourcemaps.init()))
    .pipe(babel())
    .pipe(concat("vendor.js"))
    .pipe(uglify())
    // .pipe(rename({
    //   // dirname: "main/text/ciao",
    //   basename: "vendor"
    //   // prefix: "bonjour-",
    //   // suffix: "-hola",
    //   // extname: ".md"
    // }))
    .pipe(gulpIf(config.dev, sourcemaps.write("./")))
    .pipe(gulp.dest(config.dest.js));
});
// gulp.task("js:fundation", function () {
//   return gulp.src(config.src + "/vendor/*.js")
//     .pipe(gulpIf(config.dev, sourcemaps.init()))
//     .pipe(babel())
//     .pipe(gulpIf(!config.dev, concat("vendor.js")))
//     // .pipe(gulpIf(!config.dev, rename({ suffix: '.min' })))
//     .pipe(gulpIf(config.dev, sourcemaps.write("./")))
//     .pipe(gulp.dest(config.dest + "/js/"));
// });