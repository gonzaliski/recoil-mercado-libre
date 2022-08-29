const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");

if (dev) {
   liveServer.start({
      root: "./",
      file: "index.html",
   });
}

module.exports = {
  mode:process.env.NODE_ENV,
  watch:true,
  entry: "./src/index.tsx",
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  devServer: {
    hot: false, // optional, but you must not set both hot and liveReload to true
    liveReload: true
},
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
