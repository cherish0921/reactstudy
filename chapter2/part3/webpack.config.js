const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:'./index.js', //入口文件
    mode: 'production', //生产模式
    output:{ //输出项
        path: __dirname,
        filename: 'bundle.js'
    },
    module: { //模块
        rules: [ //匹配请求的规则数组
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                }
              ]
            }
        ]
    },
    plugins: [ //插件
        new HtmlWebpackPlugin({
            title: 'use plugin'
        })
    ]
}