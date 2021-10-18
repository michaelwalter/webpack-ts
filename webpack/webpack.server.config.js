const webpack = require('webpack')
const path = require('path')
const dotEnv = require('dotenv')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config')
const { ROOT } = require('./_helpers/constants')

dotEnv.config();

module.exports = {
    ...commonConfig,
    entry: {
        'server': path.resolve(ROOT.SERVER, 'index.ts'),
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
        ]
    },
    resolve: {
        roots: [ROOT.SERVER],
        extensions: [ '.tsx', '.ts', '.js', '.html' ],
        modules: [
            ROOT.SERVER,
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
            template: path.resolve(ROOT.SERVER, 'index.html'),
            excludeChunks: [ 'server' ]
        }),
        new webpack.DefinePlugin({
            ENV: {
                PORT: process.env.PORT
            }
        })
    ]
}
