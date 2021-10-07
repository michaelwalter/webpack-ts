const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'client': path.resolve(__dirname, '../client/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: '/',
    },
    target: 'web',
    devtool: 'source-map',
    resolve: {
        roots: [path.resolve(__dirname, '../client')],
        extensions: [ '.tsx', '.ts', '.js', '.html' ],
        modules: [
            path.resolve(__dirname, '../client'),
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions',
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
                    to: 'webcomponentsjs',
                },
                {
                    from: 'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
                    to: 'webcomponentsjs',
                }
            ],
        }),
    ]
}
