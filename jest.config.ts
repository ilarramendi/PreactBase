export default {
	clearMocks: true,

	coverageProvider: 'v8',
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'babel-jest',
	},
	verbose: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
	},
};
