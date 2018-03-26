var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  notify = require("gulp-notify"),
  rename = require("gulp-rename"),
  merge = require("merge-stream"),
  spritesmith = require("gulp.spritesmith"),
  config = require("../../config");

gulp.task("png:sprite", function() {
  var spriteData = gulp.src(config.src.iconsPng + "/**/*.png").pipe(
    spritesmith({
      // retinaSrcFilter: './src/images/png/*@2x.png',
      imgName: "sprite.png", // итоговый спрайт
      // retinaImgName: 'sprite@2x.png',
      cssName: "_sprite.sass", // файл стилей
      algorithm: "left-right",
      // algorithm: 'top-down',
      padding: 30
    })
  );
  var imgStream = spriteData.img.pipe(
    gulp.dest(config.src.img + "/sprite")
  ); // путь куда записываем спрайт

  var cssStream = spriteData.css.pipe(gulp.dest(config.src.sass)); // путь куда записываем файл стилей для спрайта

  return merge(imgStream, cssStream);
});

gulp.task("png:sprite:watch", function() {
  gulp.watch(config.src.iconsPng + "/**/*.svg", gulp.series("png:sprite"));
});
