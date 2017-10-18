'use strict';
const htmlwebpackplugin = require('html-webpack-plugin')


module.exports = {
        // 入口
        entry: {
            main: "./index.js" // 单入口文件

        },
        // 出口文件
        output: {
            path: __dirname + '/dist/',
            filename: 'bulid.js'
        },
        module: {
            //模块
            loaders: [{
                    test: /.css$/, // 匹配以css文件结尾的文件才操作
                    loader: 'style-loader!css-loader!autoprefixer-loader'
                },
                {
                    test: /.less$/, // 匹配以css文件结尾的文件才操作
                    loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
                }, {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit'
                }, {
                    test: /.ttf$/,
                    loader: 'url-loader'
                }

            ]
        },
        plugins: [
            new htmlwebpackplugin({
                template: './index.html'
            })
        ]
    }
    // 第一步创建一个webpack。config。js
    // 项目当中 需要引入js 文件
    //  想关于css 的操作
    // 想要引入css文件