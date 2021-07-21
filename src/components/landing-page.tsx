import Link from "next/link";

import tw from "twin.macro";

const LandingPage = (): JSX.Element => {
	return (
		<div
			css={[
				tw`flex flex-col justify-center items-center`,
				tw`w-screen h-screen`,
				tw`font-family['Press Start 2P']`,
			]}
		>
			<h1
				css={[
					tw`bg-purple-600 `,
					tw`flex items-center justify-center`,
					tw`text-4xl h-32`,
					tw`m-3 px-12`,
				]}
			>
				Welcome to My Cool 3D Website!
			</h1>

			<p tw="my-16 text-white">You like vertices?</p>

			<div
				css={[tw`flex flex-col justify-center items-center`, tw`bg-green-500`]}
			>
				<Link href="/projects">
					<a tw="block p-10 hover:cursor-pointer">
						<h2 tw="text-2xl">Check it out!</h2>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
