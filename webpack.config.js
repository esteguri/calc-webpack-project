const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, { mode }) => {
  const isProduction = mode === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: __dirname + "/build",
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
    },
    devServer: {
      open: true,
      compress: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
