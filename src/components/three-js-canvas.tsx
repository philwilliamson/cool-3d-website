import tw from "twin.macro";

import useCanvas from "../util/hooks.ts/use-canvas";

const ThreeJsCanvas = ({ headline }: { headline: string }): JSX.Element => {
	const canvasRef = useCanvas();

	return (
		<div
			css={[
				tw`flex flex-col items-center`,
				tw`h-full`,
				tw`font-family['Press Start 2P']`,
			]}
		>
			<h1
				css={[
					tw`text-3xl bg-purple-900  text-blue-100 flex justify-center items-center h-20 w-full`,
				]}
			>
				{headline}
			</h1>
			<div ref={canvasRef} css={[tw`w-full h-full`]}></div>
		</div>
	);
};

export default ThreeJsCanvas;
