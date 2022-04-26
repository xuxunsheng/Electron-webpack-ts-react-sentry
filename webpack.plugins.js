const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  // new SentryWebpackPlugin({
  //   // sentry-cli configuration - can also be done directly through sentry-cli
  //   // see https://docs.sentry.io/product/cli/configuration/ for details
  //   // other SentryWebpackPlugin configuration
  //   include: ".webpack",
  //   release: "1.0.1",
  //   ignore: [
  //     "node_modules",
  //     "package.json",
  //     //   "webpack.main.config.js",
  //     //   "webpack.plugin.json",
  //     //   "webpack-renderer.config.js",
  //   ],
  //   // 开发模式下不上传source-map
  //   // silent: true,
  // }),
];
