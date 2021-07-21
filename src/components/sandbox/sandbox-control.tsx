import tw from "twin.macro";
import { useSandboxUpdateContext } from "./sandbox-context";

const SandboxControl = (): JSX.Element => {
	const dispatchSandboxContext = useSandboxUpdateContext();
	return (
		<div css={[tw`col-start-1 col-end-2 h-screen`, tw`bg-gray-800`]}>
			<button onClick={() => dispatchSandboxContext({ type: `red` })}>
				Red
			</button>
			<button onClick={() => dispatchSandboxContext({ type: `green` })}>
				Green
			</button>
			<button onClick={() => dispatchSandboxContext({ type: `blue` })}>
				Blue
			</button>
		</div>
	);
};

export default SandboxControl;
