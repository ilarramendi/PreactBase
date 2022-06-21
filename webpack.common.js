const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',

		// Needed for react router to work
		publicPath: '/',
	},
	devServer: {
		port: '9500',
		open: true,
		hot: true,
		liveReload: true,

		// Needed for react router to work
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					path.resolve('./loaders/exportCssModules.js'),
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									'postcss-nested',
									['postcss-modules', {
										generateScopedName: require('./loaders/generateCssModuleNames'),
										getJSON: require('./loaders/generateCssTypes'),
									}],
								],
							},
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader'],
			},
		],
	},
};
