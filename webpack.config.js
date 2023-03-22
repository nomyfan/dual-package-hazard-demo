const path = require("node:path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const useAnalyzerPlugin = !!process.env.ANALYZE;
const useESM = !!process.env.ESM;

module.exports = {
  entry: useESM ? "./src/index.mjs" : "./src/index.cjs",
  mode: "development",
  target: "web",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // optimization: {
  //   concatenateModules: false, // By default, development is false while production is true
  // },
  plugins: [useAnalyzerPlugin && new BundleAnalyzerPlugin()].filter(Boolean),
};
