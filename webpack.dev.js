const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'source-map',
	stats: {
		warnings: true,
		version: false,
		timings: true,
		source: false,
		reasons: false,
		publicPath: false,
		modules: false,
		hash: false,
		errors: true,
		errorDetails: true,
		entrypoints: false,
		colors: true,
		chunks: false,
		children: false,
		assets: false,
	},
});
