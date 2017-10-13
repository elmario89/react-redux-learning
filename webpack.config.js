let NpmInstallPlugin = require('npm-install-webpack-plugin');
let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let precss = require('precss');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
        'babel-polyfill',
	    'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin()
	],
	module: {
		rules: [
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
            },
            {
                test: /\.css?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
	}
};
