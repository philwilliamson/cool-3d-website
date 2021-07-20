import SandboxContextProvider from "./sandbox-context";
import View from "./view";

const Sandbox = (): JSX.Element => {
	return (
		<SandboxContextProvider>
			<View />
		</SandboxContextProvider>
	);
};

export default Sandbox;
