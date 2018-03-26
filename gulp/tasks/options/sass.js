const gulp = require("gulp"),
  sass = require("gulp-sass"),
  gulpIf = require("gulp-if"),
  sourcemaps = require("gulp-sourcemaps"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  config = require("../../config"),
  csso = require("postcss-csso"),
  plumber = require("gulp-plumber"),
  notify = require("gulp-notify"),
  normalize = require("node-normalize-scss").includePaths;

var processors = [
  autoprefixer({
    browsers: ["last 4 versions"],
    cascade: false
  }),
  csso
];

gulp.task("sass", function() {
  return gulp
    .src(config.src.sass + "/[^_]*.{sass,scss}")
    .pipe(
      plumber({
        errorHandler: notify.onError(function(error) {
          return {
            title: "Styles",
            message: error.message
          };
        })
      })
    )
    .pipe(gulpIf(config.dev, sourcemaps.init()))
    .pipe(
      sass({
        outputStyle: config.dev ? "expanded" : "compact", // nested, expanded, compact, compressed
        precision: 5,
        includePaths: normalize
      })
    )
    .pipe(gulpIf(!config.dev, postcss(processors)))
    .pipe(gulpIf(config.dev, sourcemaps.write("./")))
    .pipe(gulp.dest(config.dest.css));
});
gulp.task("sass:fundation", function() {
  return gulp
    .src(config.nodeModules + "bootstrap/scss/bootstrap.scss")
    .pipe(
      plumber({
        errorHandler: notify.onError(function(error) {
          return {
            title: "Styles:fundation",
            message: error.message
          };
        })
      })
    )
    .pipe(gulpIf(config.dev, sourcemaps.init()))
    .pipe(sass({}))
    .pipe(gulpIf(!config.dev, postcss(processors)))
    .pipe(gulpIf(config.dev, sourcemaps.write("./")))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task("sass:watch", function() {
  gulp.watch(config.src.sass + "/**/*.{sass,scss}", gulp.series("sass"));
});
