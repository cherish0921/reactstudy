const path=require('path');

module.exports={
    entry:'./src/index.js',  //项目入口文件
    mode: 'production',  //生产模式
    output:{ //输出结果
        filename:'bundle.js', //输出文件名
        path:path.resolve(__dirname,'src') //输出目录
    },
    module: { //2.2.3 add 模块
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
    }
}
// 执行构建命令：npm run build