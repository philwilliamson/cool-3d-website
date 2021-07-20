import tw from "twin.macro";

import SphereScene from "../../components/sphere-scene";

const SpherePage = (): JSX.Element => {
	return (
		<div css={[tw`h-screen`]}>
			<SphereScene />
		</div>
	);
};

export default SpherePage;
