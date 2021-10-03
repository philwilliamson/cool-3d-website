import Head from "next/head";
import GlobalStyles from "../components/style-components/global-styles";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Cool 3D Website</title>
    </Head>
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  </>
);
export default MyApp;
