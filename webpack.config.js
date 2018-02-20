var path = require('path');

module.exports = {
    entry: './src/lambda/index.js',
    output: {
        path: path.resolve(__dirname, 'lambda-dist'),
        filename: 'index.js',
        library: 'index',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
