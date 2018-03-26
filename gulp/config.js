const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  
var destPath = "dist";

var config = {
  dev: isDevelopment,
  nodeModules: "node_modules/",
  src: {
    root: "src",
    templates: "src/templates",
    templatesData: "src/templates/data",
    pagelist: "src/index.yaml",
    sass: "src/sass",
    // path for sass files that will be generated automatically via some of tasks
    sassGen: "src/sass/generated",
    js: "src/js",
    img: "src/img",
    svg: "src/img/svg",
    icons: "src/icons",
    // path to png sources for sprite:png task
    iconsPng: "src/icons/png",
    // path to svg sources for sprite:svg task
    iconsSvg: "src/icons/svg",
    // path to svg sources for iconfont task
    iconsFont: "src/icons",
    fonts: "src/fonts",
    lib: "src/lib",
    data: "src/data"
  },
  dest: {
    root: destPath,
    html: destPath,
    css: destPath + "/assets/css",
    js: destPath + "/assets/js",
    img: destPath + "/assets/img",
    fonts: destPath + "/assets/fonts",
    lib: destPath + "/assets/lib",
    data: destPath + "/data"
  }
};

module.exports = config;
