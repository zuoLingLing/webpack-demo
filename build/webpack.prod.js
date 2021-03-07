const { merge } = require("webpack-merge"); //合并配置文件,返回一个新的对象
const TerserPlugin = require("terser-webpack-plugin"); //该插件使用 terser 来压缩 JavaScript。
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //css代码压缩，如果一旦用了这个配置，那么js压缩插件也必不可少，如terser-webpack-plugin ，因为webpack自带压缩，但是一旦用了css压缩插件，就会导致webpack自带压缩被覆盖
const baseConfig = require('./webpack.base');
module.exports = merge(baseConfig, {
    mode: 'production', //production
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({}),
            new OptimizeCssAssetsPlugin({}),
        ],
    },
})
