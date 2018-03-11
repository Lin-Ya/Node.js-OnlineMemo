var webpack = require('webpack')
var path = require('path')  //nodejs内置的，用于组装js

module.exports = {
    entry: path.join(__dirname,"js/app/index.js"),  //入口
    output: {
        path: path.join(__dirname,"../public/javascripts"),  //输出
        filename: "aindex.js"
    },

    resolve: {  
    //解析模块别名
        alias: {
            jquery: path.join(__dirname,"js/lib/jquery-3.3.1.min.js"),
            mod: path.join(__dirname,"js/mod"),
            less: path.join(__dirname,"less")
        }
    },

    module: {
        rules:[
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
}