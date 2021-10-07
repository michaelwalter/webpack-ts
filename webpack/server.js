const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'server': path.resolve(__dirname, '../server/index.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/server'),
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        roots: [path.resolve(__dirname, '../server')],
        extensions: [ '.tsx', '.ts', '.js', '.html' ],
        modules: [
            path.resolve(__dirname, '../server'),
            path.resolve(__dirname, '../node_modules')
        ]
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../server/index.html'),
            excludeChunks: [ 'server' ]
        })
    ]
}
