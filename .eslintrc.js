module.exports = {
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	extends: [
		`eslint:recommended`,
		`plugin:@typescript-eslint/recommended`,
		`prettier`,
		`plugin:prettier/recommended`,
		`plugin:unicorn/recommended`,
	],
	rules: {
		quotes: [`error`, `backtick`],
		"unicorn/prefer-module": `off`,
		"unicorn/prevent-abbreviations": `off`,
		"unicorn/number-literal-case": `off`,
		"unicorn/no-useless-undefined": `off`,
	},
};
