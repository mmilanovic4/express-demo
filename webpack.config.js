const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = (env) => {
  const isDev = env?.dev === true;
  return {
    mode: isDev ? "development" : "production",
    watch: isDev,
    entry: path.resolve(__dirname, "src", "app.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.js",
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "static", to: "static" }],
      }),
      new CopyPlugin({
        patterns: [{ from: "views", to: "views" }],
      }),
    ],
  };
};
