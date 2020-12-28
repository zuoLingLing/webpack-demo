const {merge} = require("webpack-merge"); //合并配置文件,返回一个新的对象
const baseConfig = require('./webpack.base');
module.exports = merge(baseConfig,{
    
    mode: 'production', //production
})
