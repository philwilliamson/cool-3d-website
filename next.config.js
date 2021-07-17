module.exports = {
	root: true,
	parser: `@typescript-eslint/parser`,
	plugins: [`@typescript-eslint`],
	extends: [
		`eslint:recommended`,
		`plugin:@typescript-eslint/recommended`,
		`prettier`,
	],
	webpack5: true,
	webpack: (config) => {
		// Unset client-side javascript that only works server-side
		config.resolve.fallback = { fs: false, module: false };

		return config;
	},
};
