// // import utilStyles from "../../styles/utils.module.css";
import Head from "next/head";

import LandingPage from "../components/landing-page";

const Index = (): JSX.Element => {
	return (
		<>
			{/* <IndexStyle /> */}
			<Head>
				<title>Cool 3D Website</title>
				<meta
					name="description"
					content="A neat place to think about space... mathematically."
				/>
				<link rel="icon" href="/my_cc_icon.ico" />
			</Head>

			<LandingPage />
		</>
	);
};

export default Index;
