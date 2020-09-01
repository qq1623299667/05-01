var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + "/src",
    entry: "./js/index.js",
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', "es2015"],
                plugins: ['react-html-attrs'],
            }
        },
        //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        ]
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
};