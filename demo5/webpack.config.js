var path                = require('path');
var webpack             = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/page/index.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        publicPath: '/demo5/dist/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module:{
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.html$/, loader: "html" },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'     //加载jq
        }),
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
        new ExtractTextPlugin('css/[name].css'), // 使用style标签加载css并设置路径、css文件名
        // 根据模块插入css、js文件生产最终的html
        new HtmlWebpackPlugin({
            favicon: './src/img/favicon.ico', // 设置图标
            filename: '/view/index.html', // 生产的html存放路径，相对与path
            template: './src/view/index.html', // html模板
            inject: true, // 允许插件修改那些内容，可选值为head和body，true的话是都可以修改
            hash: true, // 为静态资源生成hash值
            minify: {
                removeComments: true, // 移除html中的注释
                collapseWhitespace: true // 删除空白符与换行符
            }
        })
    ],
    devServer:{
    	contentBase:'./dist/view'
    }
};
