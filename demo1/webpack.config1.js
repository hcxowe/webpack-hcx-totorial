// 路径组合
var path = require('path');
// 引入webpack
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main'
    },
    output: {
        path: path.join(__dirname, 'dist1'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },

    plugins: [
        //
        new webpack.ProvidePlugin({
            $: 'jquery'
        })

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     except: ['$super', '$', 'exports', 'require']
        // })
    ]
};
