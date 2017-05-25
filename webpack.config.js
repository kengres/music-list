// const path = require('path');
const { resolve } = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// var bootstrapEntryPoints = require('./webpack.bootstrap.config');

var isProd = process.env.NODE_ENV === 'production'; //true or false

var cssDev = ['style-loader','css-loader', 'sass-loader'];

var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use:  ['css-loader', 'sass-loader']  ,
    // publicPath: '/dist'              
});
var cssConfig = isProd ? cssProd : cssDev;

// var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:4000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './index.js'
        // the entry point of our app
    ],
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: './'
    },
    module: {
        rules: [
            { 
                test: /\.scss$/,
                use: cssConfig
            },
            {
               test: /\.js$/,
               exclude: /node_modules/, 
               use: ['babel-loader']

            },
            {
               test: /\.(jpe?g|png|gif|svg)$/i,
               use: [
                   'file-loader?name=[name].[ext]&outputPath=images/',
                   'image-webpack-loader'
               ]

            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader&name=fonts/[name].[ext]' },
            // Bootstrap 3
            // { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
            
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        contentBase: resolve(__dirname, 'dist'),
        compress: false,
        port: 4000,
        stats: "errors-only",
        hot: true,
        publicPath: '/'
        // open: true
    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Learning react Redux',
            hash: true,
            template: 'index.html',
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": JSON.stringify(isProd),
            // "process.env.DEVELOPMENT": JSON.stringify(dev)
        })
    ]
}