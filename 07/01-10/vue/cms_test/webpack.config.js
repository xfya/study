var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理sass文件的匹配规则
            { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: ['url-loader?limit=43959'] },
            { test: /\.(woff|ttf|svg|woff2|eot)$/, use: 'url-loader' }, // 处理字体文件的匹配规则
            { test: /\.vue$/, use: 'vue-loader' } // 处理字体文件的匹配规则
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist', // 当前服务器监听的路径
        open: true,
        port: 3000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ]
}