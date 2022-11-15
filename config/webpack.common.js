const isProd = process.argv.join(' ').includes('webpack.prod.js')

export default {
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
		alias: {
			react: 'preact/compat',
			"react/jsx-runtime": "preact/jsx-runtime",
			"react-dom": "preact/compat"
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
					// Creates `style` nodes from JS strings
					{
						loader: 'style-loader',
						options: {
							// If performance is a problem switch to dart sass
						}
					},
					// Translates CSS into CommonJS
					{
						loader: 'css-loader',
            options: {
							url: false,
							modules: {
								localIdentName: isProd ? '[hash:base64:16]' : 'PB_[name]_[local]-[hash:base64:5]'
							}
						}
					},
					// TODO add postcss-loader here
					// Compiles Sass to CSS
					"sass-loader"
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
