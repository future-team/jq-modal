/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var config = require('../package.json');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports ={
    entry:[path.join(process.cwd(),'src/index.js')],
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output:{
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:config.name+'.js'
    },
    externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'jquery': {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    }],
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            { test: /\.html$/, loader: "handlebars-loader" },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=35000'
            }/*,
             {
             test: /\.less$/,
             loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
             },*/
        ]
    },
    plugins: [
        new es3ifyPlugin()
        //new webpack.optimize.CommonsChunkPlugin('common.js')
        //new ExtractTextPlugin(path.join(config.name+'.css'))
    ]
};