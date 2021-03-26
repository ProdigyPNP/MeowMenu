module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
        "plugin:clean-regex/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
		project: ["./tsconfig.json"],
	},
	settings: {
		react: {
			version: "latest",
		},
	},
	plugins: ["react", "@typescript-eslint", "clean-regex"],
	rules: {
		eqeqeq: "error",
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		semi: ["error", "always"],
		"no-console": "off",
		"no-sparse-arrays": "off",
		"indent": ["warn", "tab", { SwitchCase: 1 }],
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/unbound-method": "warn",
		"@typescript-eslint/member-delimiter-style": "warn",
		"@typescript-eslint/prefer-readonly": "warn",
		"@typescript-eslint/class-literal-property-style": "warn",
		"@typescript-eslint/consistent-indexed-object-style": "warn",
		"@typescript-eslint/consistent-type-assertions": "warn",
		//  "@typescript-eslint/no-extraneous-class": "warn",
		"@typescript-eslint/no-implicit-any-catch": "warn",
		"@typescript-eslint/prefer-for-of": "warn",
		"@typescript-eslint/prefer-function-type": "warn",
		"@typescript-eslint/prefer-includes": "warn",
		"@typescript-eslint/prefer-nullish-coalescing": "warn",
		"@typescript-eslint/prefer-optional-chain": "warn",
		"@typescript-eslint/prefer-reduce-type-parameter": "warn",
		"@typescript-eslint/prefer-string-starts-ends-with": "warn",
		"@typescript-eslint/prefer-ts-expect-error": "warn",
		"@typescript-eslint/promise-function-async": "warn",
		"@typescript-eslint/require-array-sort-compare": ["warn", { ignoreStringArrays: true }],
		"@typescript-eslint/switch-exhaustiveness-check": "warn",
		"@typescript-eslint/type-annotation-spacing": "warn",
		"@typescript-eslint/unified-signatures": "warn",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
		"@typescript-eslint/no-unnecessary-type-arguments": "warn",
		"@typescript-eslint/no-unnecessary-type-constraint": "warn",
		"@typescript-eslint/non-nullable-type-assertion-style": "warn",
		"@typescript-eslint/explicit-function-return-type": [
			"warn",
			{ allowExpressions: true, allowConciseArrowFunctionExpressionsStartingWithVoid: true },
		],
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-loss-of-precision": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
		// ee
		"@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "explicit" }],
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/array-type": ["warn", { default: "array" }], //e
		"@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
		"@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
		"import/no-unresolved": "off",
		"import/namespace": "off",
		"react/react-in-jsx-scope": "off",
	},
	ignorePatterns: [".eslintrc.js", "next.config.js", "babel.config.js", "loader.mjs"],
};
