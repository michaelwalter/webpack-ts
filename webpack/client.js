const path = require("path");

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
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}
