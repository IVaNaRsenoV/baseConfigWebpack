module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"],
        },
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};
