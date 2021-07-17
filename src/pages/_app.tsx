import GlobalStyles from "../components/global-styles";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<div>
		<GlobalStyles />
		<Component {...pageProps} />
	</div>
);
export default MyApp;
