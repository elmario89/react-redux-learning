var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
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
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [{
			test: /\.js$/,
            include: [
                path.resolve(__dirname, "src")
            ],
			use: [
				'babel-loader'
			]
		}]
	}
};
