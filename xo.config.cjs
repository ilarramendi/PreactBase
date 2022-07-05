module.exports = {
	rules: {
		'@typescript-eslint/comma-dangle': ['off', 'always-multiline'], // Disable forcing to use dangle comma
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off', // Return void expression from arrow functions
		'@typescript-eslint/no-floating-promises': 'off', // SetState without annoying else
		'@typescript-eslint/no-unsafe-assignment': 'off', // Bind functions without settings types
		'comma-dangle': ['warn', 'never'], // Remove dangling commas
		'import/extensions': 'off', // Handled by Webpack
		'import/no-anonymous-default-export': ['off', {allowObject: true}], // Files like export default {...}
		'n/file-extension-in-import': 'off', // Handled by webpack
		'no-mixed-operators': 'off',
		'react/button-has-type': 'off', // Disable need to set a type to button elements
		'react/jsx-closing-bracket-location': 'off',
		'react/jsx-closing-tag-location': 'off', // Allow {condition && <div>\n</div>}
		'react/jsx-tag-spacing': ['warn', {beforeSelfClosing: 'always'}],
		'react/state-in-constructor': 'off', // Allow to use this.state = {} in constructor
		'no-return-assign': 'off', // Allow things like: array.map(a => <img />)
		'unicorn/filename-case': 'off',
		'unicorn/no-unused-properties': 'warn',
		'unicorn/prefer-json-parse-buffer': 'warn',
		'@typescript-eslint/dot-notation': 'off', // Allows objevct['prop']
		'unicorn/no-document-cookie': 'off', // Allows the use of document.cookie
		'guard-for-in': 'off',
		'react/react-in-jsx-scope': 'off', // Use JSX without react
		'@typescript-eslint/ban-types': 'off', // Allow the type {} for empty props
		'@typescript-eslint/no-empty-function': 'off', // Allows the use of () => {}
		/* 'unicorn/filename-case': ['error', 	{case: 'camelCase'}], */ // Enforce filename case,
		curly: ['warn', 'multi'], // Show waring when curly bracket can be removed
		indent: 'off',
		radix: 'off' // Allow number.toString() without parameters
	},
	overrides: [
		{
			files: './config/loaders/generateCssModuleNames.js',
			rules: {'no-bitwise': 'off'}
		}
	],
	extends: 'xo-react'
};
