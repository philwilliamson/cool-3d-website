import tw, { css } from "twin.macro";
import Link from "next/link";

import ThreeJsCanvas from "../../components/three-js-canvas";
import ElaborateScene from "../../components/elaborate-scene";

const Projects = (): JSX.Element => {
	return (
		<div
			css={[
				tw`w-screen h-screen flex flex-row`,
				tw`box-border p-24`,
				tw`bg-blue-300`,
			]}
		>
			<Link href="/projects/sphere">
				<div
					css={[
						tw`w-60 min-width[15rem] h-60 m-5`,
						tw`flex flex-col items-center justify-center`,
						tw`cursor-pointer`,
						tw`overflow-hidden `,
						css`
							border-radius: 30px;
							border-collapse: separate;
						`,
					]}
				>
					<h1 tw="flex w-full p-2 min-height[20px] font-family['Press Start 2P'] text-white items-center justify-center bg-purple-600">
						Sphere
					</h1>
					<ThreeJsCanvas />
				</div>
			</Link>
			<Link href="/projects/elaborate-scene">
				<div
					css={[
						tw`w-60 min-width[15rem] h-60 m-5`,
						tw`flex flex-col items-center justify-center`,
						tw`cursor-pointer`,
						tw`overflow-hidden `,
						css`
							border-radius: 30px;
							border-collapse: separate;
						`,
					]}
				>
					<h1 tw="flex w-full p-2 min-height[20px] font-family['Press Start 2P'] text-sm text-white items-center justify-center bg-purple-600">
						Elaborate Scene
					</h1>
					<ElaborateScene />
				</div>
			</Link>
		</div>
	);
};

export default Projects;
