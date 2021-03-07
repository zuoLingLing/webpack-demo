const path = require('path');
const webpack = require('webpack');
module.exports={
    mode: 'production', //production
    entry:{
        react:[
            'react',
            'react-dom',
            'react-router-dom'
        ]
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name]_dll.js',
        library:'[name]_dll'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]_dll',
            path:path.resolve(__dirname,'..','./dist/manifest.json')
        })
    ]
}