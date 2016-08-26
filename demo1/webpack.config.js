// 目录
var path = require('path');
// 引入webpack
var webpack = require('webpack');

module.exports = {
    // 页面入口
    entry: {
        app: './src/main',
        vendor: ['jquery']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },

    plugins: [
        new webpack.BannerPlugin('hcxowe webpack-hcx-totorial'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']
        })
    ]
};
