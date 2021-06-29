const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, `${process.env.WEEK_ENV}/index.js`),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        stats: 'errors-warnings',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [['@babel/plugin-transform-react-jsx']],
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: process.env.WEEK_ENV,
        }),
    ],
};

module.exports = webpackConfig;
