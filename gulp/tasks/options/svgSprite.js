var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  notify = require("gulp-notify"),
  svgSprite = require("gulp-svg-sprite"),
  svgmin = require("gulp-svgmin"),
  replace = require("gulp-replace"),
  cheerio = require("gulp-cheerio"),
  config = require("../../config");

var conf = {
  mode: {
    symbol: {
      sprite: "../sprite.svg",
      example: {
        dest: "../tmp/spriteSvgDemo.html" // демо html
      }
    }
  }
};

// svg
gulp.task("svg:sprite", function() {
  return (
    gulp
      .src(config.src.iconsSvg + "/**/*.svg")
      // минифицируем svg
      .pipe(
        svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      // удалить все атрибуты fill, style and stroke в фигурах
      .pipe(
        cheerio({
          run: function($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: {
            xmlMode: true
          }
        })
      )
      // cheerio плагин заменит, если появилась, скобка '&gt;', на нормальную.
      .pipe(replace("&gt;", ">"))
      // build svg sprite
      .pipe(svgSprite(conf))
      .pipe(gulp.dest(config.src.img + "/sprite"))
  );
});

gulp.task("svg:sprite:watch", function() {
  gulp.watch(config.src.iconsSvg + "/**/*.svg", gulp.series("svg:sprite"));
});
