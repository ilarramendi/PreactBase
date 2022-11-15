import path from 'node:path';
import zlib from 'node:zlib';
import CompressionPlugin from 'compression-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import {merge} from 'webpack-merge';
import Visualizer from 'webpack-visualizer-plugin2';
import common from './webpack.common.js';

export default merge(common, {
	mode: 'production',
	output: {
		path: path.resolve('./public'),
		filename: 'main.js',

		// Needed for wouter router to work
		publicPath: '/'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {comments: false},
					mangle: {module: true}
				},
				extractComments: false
			})
		]
	},
	plugins: [
		// Compress with GZIP
		new CompressionPlugin({
			filename: '[path][base].gz',
			algorithm: 'gzip',
			test: /\.(js|css|html|svg)$/
		}),
		// Compress with Brotli
		new CompressionPlugin({
			filename: '[path][base].br',
			algorithm: 'brotliCompress',
			test: /\.(js|css|html|svg)$/,
			compressionOptions: {
				params: {
					[zlib.constants.BROTLI_PARAM_QUALITY]: 10
				}
			}
		}),
		// Visualizer for checking code size
		new Visualizer({
			filename: './statistics.html'
		})
	]
});
