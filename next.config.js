// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require(`next-transpile-modules`)([`three/examples/jsm`]);

module.exports = withTM({
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
	optimizeFonts: false,
});
