module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: [`Press Start 2P`],
			sticker: [`Antipol`],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require(`@tailwindcss/typography`)],
};
