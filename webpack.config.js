const NpmInstallPlugin = require('npm-install-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
        'babel-polyfill',
	    'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/index',
        './src/styles/app.sass'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
            {
                test: /\.sass$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                loader: "eslint-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                loader: "babel-loader"
            }
        ]
	},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin(),
        new ExtractTextPlugin({
            filename: 'src/styles/app.bundle.css'
        })
    ],
};
