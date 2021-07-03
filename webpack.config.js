const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, `${process.env.NODE_ENV}/index.js`),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].index.js',
        library: {
            type: 'umd',
        },
        clean: true,
    },
    target: 'web',
    devtool: 'source-map',
    optimization: {
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    devServer: {
        open: true,
        stats: 'errors-warnings',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: process.env.NODE_ENV,
        }),
    ],
};

module.exports = webpackConfig;
