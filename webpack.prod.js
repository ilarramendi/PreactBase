const zlib = require('zlib');
// Const Visualizer = require('webpack-visualizer-plugin2');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			terserOptions: {
				format: {comments: false},
				mangle: {module: true},
			},
			extractComments: false,
		})],
	},
	plugins: [
		// Compres with GZIP
		new CompressionPlugin({
			filename: '[path][base].gz',
			algorithm: 'gzip',
			test: /\.(js|css|html|svg)$/,
		}),
		// Compress with Brotli
		new CompressionPlugin({
			filename: '[path][base].br',
			algorithm: 'brotliCompress',
			test: /\.(js|css|html|svg)$/,
			compressionOptions: {
				params: {
					[zlib.constants.BROTLI_PARAM_QUALITY]: 10,
				},
			},
		}),
		// Visualizer for checking code size
		/* new Visualizer({
            filename: './statistics.html'
        }) */
	],
});
