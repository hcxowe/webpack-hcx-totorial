var path = require('path');
module.exports = {
    entry: {
        index: './src/js/index'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: './dist/'
    },
    module: {
        loaders: [
            {test: /\.css$/, exclude: /node_modules/, include: /css/, loader: 'style!css'},
            {test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?name=imgs/[hash:8].[name].[ext]&limit=8192'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015'}
        ]
    }
};
