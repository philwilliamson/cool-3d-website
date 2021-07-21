import tw from "twin.macro";

import Sandbox from "../../components/sandbox/sandbox";

const SandboxPage = (): JSX.Element => {
	return (
		<div css={[tw`h-screen`]}>
			<Sandbox />
		</div>
	);
};

export default SandboxPage;
