import tw from "twin.macro";
import { useSandboxContext, useSandboxUpdateContext } from "./sandbox-context";

const SandboxControl = (): JSX.Element => {
	const sandboxContext = useSandboxContext();
	const setSandboxContext = useSandboxUpdateContext();

	return (
		<div
			css={[
				tw`flex flex-col justify-center items-center `,
				tw`col-start-1 col-end-2 h-screen`,
				tw`bg-gray-800`,
			]}
		>
			<p tw="text-white">Pick a Color</p>
		</div>
	);
};

export default SandboxControl;
