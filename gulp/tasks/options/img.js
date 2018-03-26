var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  notify = require("gulp-notify"),
  config = require("../../config"),
  pngquant = require("imagemin-pngquant"),
  imagemin = require("gulp-imagemin");

gulp.task("img", function() {
  return gulp
    .src(config.src.img + "/**/*.{jpg,png,jpeg,svg,gif}")
    .pipe(
      plumber({
        errorHandler: notify.onError(function(error) {
          return {
            title: "Images",
            message: error.message
          };
        })
      })
    )
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true,
        type: 1,
        colors: 255,
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      // imagemin.optipng({
      //   optimizationLevel: 5,
      //   bitDepthReduction: true,
      //   colorTypeReduction: true,
      //   paletteReduction: true
      // }),
      { use: [pngquant()] }
    ]))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task("img:watch", function() {
  gulp.watch(
    [config.src.img + "/**/*.{jpg,png,jpeg,svg,gif}"],
    gulp.series("img")
  );
});
