const path = require("path");
const ExrtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      //   {
      //     use: ["style-loader", "css-loader"], // order is important
      //     test: /\.css$/
      //   },
      {
        loader: ExrtractTextPlugin.extract({
          loader: "css-loader"
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [new ExrtractTextPlugin("style.css")]
};

module.exports = config;
