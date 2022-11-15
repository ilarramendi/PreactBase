import {merge} from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
	mode: 'development',
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
		assets: false
	},
	devServer: {
		port: '9500',
		// open: true,
		hot: true,
		// Needed for react router to work
		historyApiFallback: true,
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'https://YOUR_BACKEND_SERVER'
			}
		},
	}
});
