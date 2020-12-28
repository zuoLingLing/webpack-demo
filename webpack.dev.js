const {merge} = require("webpack-merge"); //合并配置文件,返回一个新的对象
const baseConfig = require('./webpack.base');
module.exports = merge(baseConfig , {
    mode: 'development', //production
    devServer: {
        open: true,
        hot: true,
        port: 5000,
        compress: true

    },
    devtool: "cheap-module-eval-source-map" //自己理解的就是映射，在代码中哪一行打印都可以点击进入源代码中
})
