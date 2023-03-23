const path = require("node:path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const useAnalyzerPlugin = !!process.env.ANALYZE;

const entry = process.env.ENTRY_FILE;

module.exports = {
  entry: entry,
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
