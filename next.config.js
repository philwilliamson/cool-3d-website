// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require(`next-transpile-modules`)([
	`three/examples/jsm`,
	`rgb-hex`,
]);

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
		// config.resolve.fallback = { fs: false, module: false };
		// config.infrastructureLogging = { debug: /PackFileCache/ };
		// config.snapshot.resolveBuildDependencies = { hash: false };
		return config;
	},
	optimizeFonts: false,
});
