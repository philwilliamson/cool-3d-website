import tw from "twin.macro";
import SandboxContextProvider from "./sandbox-context";
import SandboxView from "./sandbox-view";
import SandboxControl from "./sandbox-control";

const Sandbox = (): JSX.Element => {
	return (
		<div css={[tw`grid grid-cols-6`]}>
			<SandboxContextProvider>
				<SandboxControl />
				<SandboxView />
			</SandboxContextProvider>
		</div>
	);
};

export default Sandbox;
