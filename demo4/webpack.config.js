var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');// 动态生成html
var ExtractTextPlugin = require("extract-text-webpack-plugin");//提取单独的ｃｓｓ文件
var autoprefixer = require('autoprefixer');//CSS添加浏览器前缀插件

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/index.js',
        main: './src/index1.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[hash:8].js'
    },

    module: {
        loaders: [
            {test:/\.css$/, exclude:/node_modules/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')}
        ]
    },

    postcss:[autoprefixer({browsers:['last 2 versions']})],

    plugins: [
        //当模块使用这些变量的时候,wepback会自动加载
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // 不显示错误插件
        //new webpack.optimize.DedupePlugin(),
        // 压缩
        //new webpack.optimize.UglifyJsPlugin(),
        // 提取公共模块
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("./css/[name].[hash].css"),
        new htmlWebpackPlugin({
            title: 'my-app',
            filename: './index.html',
            template: './index.html'
        })
    ],
    // webpack-dev-server的设置
    devServer: {
        contentBase: './dist',
        color: true,
        historyApiFallback: true,
        inline: true
    }
};
