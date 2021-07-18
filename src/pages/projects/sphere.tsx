import tw from "twin.macro";

import ThreeJsCanvas from "../../components/three-js-canvas";

const SpherePage = (): JSX.Element => {
	return (
		<div css={[tw`h-screen`]}>
			<ThreeJsCanvas />
		</div>
	);
};

export default SpherePage;
