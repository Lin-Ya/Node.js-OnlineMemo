var webpack = require('webpack')
var path = require('path')  //nodejs内置的，用于组装js

module.exports = {
    entry: path.join(__dirname,"js/app/index.js"),  //入口
    output: {
        path: path.join(__dirname,"../public/javascripts"),  //输出
        filename: "index.js"
    }
}