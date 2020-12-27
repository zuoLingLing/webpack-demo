var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: ["@babel/polyfill","./src/main.js"], //@babel/polyfill是解决内核版本太低不支持es6新语法，如数组的includes等方法的
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist/')
    },
    mode: 'development', //production
    devServer: {
        open: true,
        hot: true,
        port: 8000,
        compress: true,
        contentBase:'./dist'

    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: path.join(__dirname, './src/index.html')
            }
        ),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/index.html",
                    to: path.join(__dirname, './dist/')
                }
            ],
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                loader: "less-loader", // compiles Less to CSS
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
}
