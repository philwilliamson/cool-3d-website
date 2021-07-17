import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(context: DocumentContext): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = context.renderPage;
		try {
			context.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (properties) =>
						sheet.collectStyles(<App {...properties} />),
				});
			const initialProperties = await Document.getInitialProps(context);

			return {
				...initialProperties,
				styles: (
					<>
						{initialProperties.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<meta
						name="description"
						content="A neat place to think about space... mathematically."
					/>
					<link rel="icon" href="/my_cc_icon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
