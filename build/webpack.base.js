var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const processENV = require("./processENV");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css都放在一个文件中，需要修改css配置的loader，style-loader的原理是利用js插入到html中

/**
 * 
 * 采用相对路径，相对的都是根目录
 * 采用绝对路径__dirname，获得当前执行文件所在目录的完整目录名
 */
module.exports = {
    entry: ["@babel/polyfill", "./src/index.jsx"], //@babel/polyfill是解决内核版本太低不支持es6新语法，如数组的includes等方法的
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '..', './dist/'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: path.join(__dirname, '..', './src/index.html')
            }
        ),
        // new CleanWebpackPlugin(), //如果项目中配置了DLL，这个不可以存在
        new CopyPlugin(
            [
                {
                    from: path.join(__dirname, '..', './src/assets'),
                    to: 'assets'
                },
            ]
        ),
        new webpack.ProvidePlugin({ //第三方库的引入，在每个文件注入key值所对应的变量，如$
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({ //全局的环境变量
            'processENV': JSON.stringify(processENV)
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new webpack.DllReferencePlugin({ //指定manifest.json的path，与react_dll文件产生联系
            manifest: path.resolve(__dirname, '..', './dist/manifest.json')
        }),
        new AddAssetHtmlPlugin({ //向html中插入react_dll.js
            filepath: path.resolve(__dirname,'..','./dist/react_dll.js')
        })

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/,
                use: [{

                    // loader: "style-loader"
                    loader: MiniCssExtractPlugin.loader

                }, {

                    loader: "css-loader"

                },
                {
                    loader: "postcss-loader"
                },
                {

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
            '@': path.join(__dirname, '..', './src/')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    },
}
