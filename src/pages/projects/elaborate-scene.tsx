import tw from "twin.macro";

import ElaborateScene from "../../components/elaborate-scene";

const ElaborateScenePage = (): JSX.Element => {
	return (
		<div css={[tw`h-screen`]}>
			<ElaborateScene />
		</div>
	);
};

export default ElaborateScenePage;
