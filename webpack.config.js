const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dir = path.resolve(__dirname, 'dist')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.[hash].js",
        path: dir
    },
    devServer: {
        static: {
            directory: dir,
        },
        compress: false,
        port: 9000,
        liveReload: false
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx','.png']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"]
              }
        ]

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
        
    ],

}