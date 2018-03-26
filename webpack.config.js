const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const config = require("./gulp/config");

const basicConfig = {
  entry: {
    vendor:'./src/js/vendor.js',
    index: "./src/js/app.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/assets/js/"),
    publicPath: "/dist/assets/",
    filename: "[name].bundle.js"
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

console.log(config.dev);

if (config.dev) {
  basicConfig.plugins = basicConfig.plugins.concat([]);
  console.log("dev");
} else {
  basicConfig.plugins = basicConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin()
  ]);
  console.log("build");
}

module.exports = basicConfig;
