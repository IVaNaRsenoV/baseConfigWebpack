const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "../src"),
  entry: {
    main: "./index.tsx",
  },
  output: {
    path: path.join(__dirname, "../dist/"),
    clean: true,
    filename: "[name].[contenthash].js",
  },
  devServer: {
    open: true,
    port: 3000,
  },
};
