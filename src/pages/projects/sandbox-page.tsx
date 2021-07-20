import tw from "twin.macro";

import Sandbox from "../../components/r3f-sandbox/sandbox";

const SandboxPage = (): JSX.Element => {
	return (
		<div css={[tw`h-screen bg-black`]}>
			<Sandbox />
		</div>
	);
};

export default SandboxPage;
