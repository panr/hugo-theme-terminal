const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

const join = (...paths) => path.join(__dirname, ...paths);

module.exports = (env, { mode }) => ({
  resolve: {
    extensions: [".js", ".css"],
    modules: ["assets", "node_modules"],
  },
  entry: {
    main: join("assets", "js", "menu.js"),
    languageSelector: join("assets", "js", "languageSelector.js"),
    prism: join("assets", "js", "prism.js"),
    style: join("assets", "css", "style.css"),
    red: join("assets", "css", "color", "red.css"),
    blue: join("assets", "css", "color", "blue.css"),
    green: join("assets", "css", "color", "green.css"),
    pink: join("assets", "css", "color", "pink.css"),
  },
  output: {
    filename: "[name].js",
    path: join("static/assets"),
    publicPath: "",
  },
  performance: {
    hints: false,
  },
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
      {
        test: /\.(png|jpg|woff|woff2|ttf|eot|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
              import: true,
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: 2,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [join("static/assets")],
      cleanAfterEveryBuildPatterns: [
        join("static/assets/style.js"),
        join("static/assets/blue.js"),
        join("static/assets/green.js"),
        join("static/assets/red.js"),
        join("static/assets/pink.js"),
      ],
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});
