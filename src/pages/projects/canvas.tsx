import tw from "twin.macro";

import ThreeJsCanvas from "../../components/three-js-canvas";

const Canvas = (): JSX.Element => {
	return (
		<div css={[tw`h-screen`]}>
			<ThreeJsCanvas headline={`Sphere`} />
		</div>
	);
};

export default Canvas;
