var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const processENV = require("./processENV");
/**
 * 
 * 采用相对路径，相对的都是根目录
 * 采用绝对路径__dirname，获得当前执行文件所在目录的完整目录名
 */
module.exports = {
    entry: ["@babel/polyfill", "./src/index.jsx"], //@babel/polyfill是解决内核版本太低不支持es6新语法，如数组的includes等方法的
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'..','./dist/'),
        publicPath: '/'
    }, 
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: path.join(__dirname,'..', './src/index.html')
            }
        ),
        new CleanWebpackPlugin(),
        new CopyPlugin(
            [
                {
                    from: "./src/index.html",
                    to: path.join(__dirname,'..', './dist/')
                },
                {
                    from: path.join(__dirname,'..','./src/assets'),
                    to: 'assets'
                },
            ]
        ),
        new webpack.ProvidePlugin({ //第三方库的引入，在每个文件注入key值所对应的变量，如$
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({
            'processENV': JSON.stringify(processENV)
        })

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: [{

                    loader: "style-loader"

                }, {

                    loader: "css-loader"

                }, {

                    loader: "less-loader"

                }] // compiles Less to CSS
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 5,
                            esModule: false
                        },
                    },
                ],
            },
            {
                test: /\.(woff|svg|eot|ttf)$/i,
                use: 'url-loader',
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            '@': path.join(__dirname,'..','./src/')
        }
    }
}