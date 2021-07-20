// here we utilize useContext with useState to allow a
import React, { useContext, useReducer } from "react";

const SandboxContext = React.createContext(false);
const SandboxUpdateContext = React.createContext(undefined);

// functions for accessing the respective contexts
export const useSandboxContext = (): boolean => {
	return useContext(SandboxContext);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSandboxUpdateContext = (): any => {
	return useContext(SandboxUpdateContext);
};

interface ContextInterface {
	color?: string;
}

interface SandboxInterface {
	children?: React.ReactNode;
	contextInterface?: ContextInterface;
}

const sandboxHandler = () => {
	return undefined;
};

const SandboxContextProvider = ({
	children,
	contextInterface = { color: `white` },
}: SandboxInterface): JSX.Element => {
	const [sandboxContext, dispatchSandboxContext] = useReducer(
		sandboxHandler,
		contextInterface
	);
	return (
		<SandboxContext.Provider value={sandboxContext}>
			<SandboxUpdateContext.Provider value={dispatchSandboxContext}>
				{children}
			</SandboxUpdateContext.Provider>
		</SandboxContext.Provider>
	);
};

export default SandboxContextProvider;
