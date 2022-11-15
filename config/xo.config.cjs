module.exports = {
	rules: {
		'@typescript-eslint/comma-dangle': ['off', 'always-multiline'], // Disable forcing to use dangle comma
		'@typescript-eslint/no-confusing-void-expression': 'off', // Return void expression from arrow functions
		'@typescript-eslint/no-floating-promises': 'off', // SetState without anything else
		'@typescript-eslint/no-unsafe-assignment': 'off', // Bind functions without settings types
		'comma-dangle': ['error', 'never'], // Remove dangling commas
		'import/extensions': 'off', // Handled by Webpack
		'import/no-anonymous-default-export': ['off', {allowObject: true}], // Files like export default {...}
		'n/file-extension-in-import': 'off', // Handled by webpack
		'react/jsx-closing-tag-location': 'off', // Allow {condition && <div>\n</div>}
		'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'always'}],
		'no-return-assign': 'off', // Allow things like: array.map(a => <img />)
		'guard-for-in': 'warn',
		'react/react-in-jsx-scope': 'off', // Use JSX without react
		'@typescript-eslint/no-empty-function': 'off', // Allows the use of () => {}
		'@typescript-eslint/no-unsafe-return': 'off', // Allow render method without specifying return type
		'react/no-array-index-key': 'warn', // Fix later
		'no-use-extend-native/no-use-extend-native': 'off', // Allow the use of String.t()
		'sort-keys': 'error',
		'react/jsx-sort-props': ['error', {
			multiline: 'last',
			shorthandFirst: true
		}],
		'unicorn/filename-case': [ // Enforce filename case
			'error',
			{
				case: 'pascalCase',
				ignore: ['.*\.types\.ts', '.*\.d\.ts']
			}
		],
		curly: ['error', 'multi-line'], // Show waring when curly bracket can be removed
		radix: 'off', // Allow number.toString() without parameters

		// Rules from xo-typescript

		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple'
			}
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-expect-error': 'allow-with-description',
				minimumDescriptionLength: 4
			}
		],
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: false,
				types: {
					String: {
						message: 'Use `string` instead.',
						fixWith: 'string'
					},
					Number: {
						message: 'Use `number` instead.',
						fixWith: 'number'
					},
					Boolean: {
						message: 'Use `boolean` instead.',
						fixWith: 'boolean'
					},
					Symbol: {
						message: 'Use `symbol` instead.',
						fixWith: 'symbol'
					},
					BigInt: {
						message: 'Use `bigint` instead.',
						fixWith: 'bigint'
					},
					Object: {
						message: 'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
						fixWith: 'Record<string, unknown>'
					},
					'{}': {
						message: 'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
						fixWith: 'Record<string, unknown>'
					},
					object: {
						message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
						fixWith: 'Record<string, unknown>'
					},
					Function: 'Use a specific function type instead, like `() => void`.',
					null: {
						message: 'Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7',
						fixWith: 'undefined'
					},
					'[]': 'Don\'t use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.',
					'[[]]': 'Don\'t use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.',
					'[[[]]]': 'Don\'t use `[[[]]]`. Use `SomeType[][][]` instead.',
					'[[[[]]]]': 'ur drunk 🤡',
					'[[[[[]]]]]': '🦄💥'
				}
			}
		],
		'@typescript-eslint/class-literal-property-style': [
			'error',
			'getters'
		],
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter'
			}
		],
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'interface'
		],
		'@typescript-eslint/consistent-type-exports': [
			'error',
			{
				fixMixedExportsWithInlineTypeSpecifier: true
			}
		],
		'@typescript-eslint/consistent-type-imports': 'error',

		// Disabled because it's too annoying. Enable it when it's more mature, smarter, and more flexible.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22explicit-function-return-type%22&state=open&type=Issues
		// '@typescript-eslint/explicit-function-return-type': [
		// 	'error',
		// 	{
		// 		allowExpressions: true,
		// 		allowTypedFunctionExpressions: true,
		// 		allowHigherOrderFunctions: true,
		// 		allowConciseArrowFunctionExpressionsStartingWithVoid: false
		// 	}
		// ],


		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': [
			'error',
			'never'
		],
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'error',
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{
				// Workaround to allow class fields to not have lines between them.
				exceptAfterSingleLine: true
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: [
					'signature',

					'public-static-field',
					'public-static-method',

					'protected-static-field',
					'protected-static-method',

					'private-static-field',
					'private-static-method',

					'static-field',
					'static-method',

					'public-decorated-field',
					'public-instance-field',
					'public-abstract-field',
					'public-field',

					'protected-decorated-field',
					'protected-instance-field',
					'protected-abstract-field',
					'protected-field',

					'private-decorated-field',
					'private-instance-field',
					'private-abstract-field',
					'private-field',

					'instance-field',
					'abstract-field',
					'decorated-field',
					'field',

					'public-constructor',
					'protected-constructor',
					'private-constructor',
					'constructor',

					'public-decorated-method',
					'public-instance-method',
					'public-abstract-method',
					'public-method',

					'protected-decorated-method',
					'protected-instance-method',
					'protected-abstract-method',
					'protected-method',

					'private-decorated-method',
					'private-instance-method',
					'private-abstract-method',
					'private-method',

					'instance-method',
					'abstract-method',
					'decorated-method',
					'method'
				]
			}
		],

		// Disabled for now as it causes too many weird TypeScript issues. I'm not sure whether the problems are caused by bugs in TS or problems in my types.

		// We use `@typescript-eslint/naming-convention` in favor of `camelcase`.
		camelcase: 'off',

		'@typescript-eslint/no-base-to-string': 'error',
		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true
			}
		],

		'@typescript-eslint/no-extra-non-null-assertion': 'error',

		// Disabled because it's buggy. It transforms `...(personalToken ? {Authorization: `token ${personalToken}`} : {})` into `...personalToken ? {Authorization: `token ${personalToken}`} : {}` which is not valid.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22no-extra-parens%22&state=open&type=Issues
		'no-extra-parens': 'off',
		// '@typescript-eslint/no-extra-parens': [
		// 	'error',
		// 	'all',
		// 	{
		// 		conditionalAssign: false,
		// 		nestedBinaryExpressions: false,
		// 		ignoreJSX: 'multi-line'
		// 	}
		// ],

		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',
		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': 'error',
		'@typescript-eslint/no-extraneous-class': [
			'error',
			{
				allowConstructorOnly: false,
				allowEmpty: false,
				allowStaticOnly: false,
				allowWithDecorator: true
			}
		],
		'no-void': [
			'error',
			{
				allowAsStatement: true // To allow `ignoreVoid` in `@typescript-eslint/no-floating-promises`
			}
		],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implicit-any-catch': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',

		// Disabled for now as it has too many false-positives.
		// '@typescript-eslint/no-invalid-void-type': 'error',

		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': [
			'error',
			[
				'error',
				'domain',
				'freelist',
				'smalloc',
				'punycode',
				'sys',
				'querystring',
				'colors'
			]
		],
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true
			}
		],
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': [
			'error',
			{
				// This should ideally be `false`, but it makes rethrowing errors inconvenient. There should be a separate `allowRethrowingUnknown` option.
				allowThrowingUnknown: true,
				allowThrowingAny: false
			}
		],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

		// `no-unnecessary-condition` is essentially a stricter version of `no-constant-condition`, but that isn't currently enabled
		'no-constant-condition': 'error',


		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',

		'@typescript-eslint/no-unsafe-call': 'error',

		// Disabled until TypeScrpt supports the `node:` protocol.
		// '@typescript-eslint/no-unsafe-member-access': 'error',

		'@typescript-eslint/no-useless-empty-export': 'error',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'no-unused-vars': 'off',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': [
			'error',
			'never'
		],
		'padding-line-between-statements': 'off',
		'@typescript-eslint/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'multiline-block-like',
				next: '*'
			}
		],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/parameter-properties': [
			'error',
			{
				prefer: 'parameter-property'
			}
		],
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',

		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single'
		],
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				checkCompoundAssignments: true,
				allowAny: false
			}
		],
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true
			}
		],
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/require-array-sort-compare': [
			'error',
			{
				ignoreStringArrays: true
			}
		],

		// Disabled for now. It's too buggy. It fails to detect when try/catch is used, await inside blocks, etc. It's also common to have async functions without await for various reasons.
		// 'require-await': 'off',
		// '@typescript-eslint/require-await': 'error',

		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'error',
		semi: 'off',
		'@typescript-eslint/semi': [
			'error',
			'always'
		],
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': [
			'error',
			'always'
		],

		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				path: 'never',
				types: 'never',
				lib: 'never'
			}
		],
		'@typescript-eslint/type-annotation-spacing': 'error',

		// Disabled as it crashes on most code.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22unbound-method%22&state=open&type=Issues
		// '@typescript-eslint/unbound-method': [
		// 	'error',
		// 	{
		// 		ignoreStatic: true
		// 	}
		// ],

		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/unified-signatures': [
			'error',
			{
				ignoreDifferentlyNamedParameters: true
			}
		],

		// Disabled per typescript-eslint recommendation: https://github.com/typescript-eslint/typescript-eslint/blob/e26e43ffba96f6d46198b22f1c8dd5c814db2652/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
		'no-undef': 'off',

		// TypeScript might have features not supported in a specific Node.js version.
		'node/no-unsupported-features/es-syntax': 'off',
		'node/no-unsupported-features/es-builtins': 'off',

		// We use `@typescript-eslint/ban-types` instead.
		'unicorn/no-null': 'off',

		// The rule is buggy with TS and it's not needed as TS already enforces valid imports and references at compile-time.
		'import/namespace': 'off',

		// `import/no-duplicates` works better with TypeScript.
		'no-duplicate-imports': 'off'
	},
	overrides: [
		{
			files: './config/loaders/generateCssModuleNames.js',
			rules: {'no-bitwise': 'off'}
		},
		{
			files: './src/index.tsx',
			rules: {
				'import/no-unassigned-import': 'off',
				'sort-imports': 'off'
			}
		},
		{
			files: './src/*/index.ts',
			rules: {
				'unicorn/prefer-export-from': 'off'
			}
	}
	],
	extends: ['xo-react']
};
