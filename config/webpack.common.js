import path from 'node:path';
import generateScopedName from './loaders/generateCssModuleNames.js';
import getJSON from './loaders/generateCssTypes.js';

export default {
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
		alias: {
			react: 'preact/compat'
		}
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: ['@svgr/webpack']
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					path.resolve('./loaders/exportCssModules.cjs'),
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									'postcss-nested',
									['postcss-modules', {generateScopedName, getJSON}]
								]
							}
						}
					}
				]
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			}
		]
	}
};
