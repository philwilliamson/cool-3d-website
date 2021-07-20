import tw from "twin.macro";

import SphereScene from "../../components/three-js-canvas";

const SpherePage = (): JSX.Element => {
	return (
		<div css={[tw`h-screen`]}>
			<SphereScene />
		</div>
	);
};

export default SpherePage;
