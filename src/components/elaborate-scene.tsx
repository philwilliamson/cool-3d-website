import tw from "twin.macro";

import useCanvasRef2 from "../util/hooks.ts/use-canvas-ref2";

const ElaborateScene = (): JSX.Element => {
	const canvasRef = useCanvasRef2({});

	return <div ref={canvasRef} css={[tw`w-full h-full`]}></div>;
};

export default ElaborateScene;
