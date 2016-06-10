var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: "./src/main.js",
    vendor: ["react","react-dom"]
  },
  output: {
    path: path.resolve("./build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  externals: {
    //'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: "build"
  }
};
