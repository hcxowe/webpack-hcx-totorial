var path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
        main: ['./src/index0', './src/index00']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        chunkFilename: 'vendor/[id].[name].js'
    }
};
