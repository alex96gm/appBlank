const webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig = require('./webpack.config.js'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const prodConfig = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                modules: false,
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                modules: false,
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                })
            }
        ]
    },
    devtool: 'none',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: false,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                    quote_style: 1
                }
            }
        })
    ]
}

module.exports = () => webpackMerge(commonConfig, prodConfig);