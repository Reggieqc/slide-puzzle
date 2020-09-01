const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
    context: __dirname,
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname , 'dist/'), 
        filename: 'bundle.js',
        publicPath:'/'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                }
            },
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'html-loader',
            //         options: {
            //             minimize: true
            //         }
            //     }]
            // },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                   'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader',
                ],
              },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            
        ]
    },
    resolve: {
        extensions: ['.ts','.js'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html",
            favicon:"./src/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename: "[id].css"
        })
    ]
}