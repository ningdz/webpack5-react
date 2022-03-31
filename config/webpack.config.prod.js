// 合并规则
const { merge } = require("webpack-merge");
// 清理原来的打包文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 压缩css文件
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
// 导入基础配置
const { baseConfig } = require("./webpack.config.base");
module.exports = merge(baseConfig, {
  // 环境配置：生产环境
  mode: "production",
  plugins: [new CleanWebpackPlugin(), new CssMinimizerWebpackPlugin()],
});
