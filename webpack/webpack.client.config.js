const webpack = require('webpack')
const path = require('path')
const dotEnv = require('dotenv')
const commonConfig = require('./webpack.common.config')
const { ROOT } = require('./_helpers/constants')

dotEnv.config();

module.exports = {
    ...commonConfig,
    entry: {
        'client': path.resolve(ROOT.CLIENT, 'index.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: '/',
    },
    target: 'web',
    devtool: 'source-map',
    resolve: {
        roots: [ROOT.CLIENT],
        extensions: [ '.tsx', '.ts', '.js', '.html' ],
        modules: [
            ROOT.CLIENT,
            path.resolve(__dirname, '../node_modules')
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: {
                PORT: process.env.PORT
            }
        })
    ]
}
