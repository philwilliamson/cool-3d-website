// here we utilize useContext with useState to allow a
import React, { useContext, useReducer } from "react";

const SandboxContext = React.createContext(undefined);
const SandboxUpdateContext = React.createContext(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSandboxContext = (): any => {
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

const sandboxHandler = (sandboxContext, action): ContextInterface => {
	switch (action.type) {
		case `red`:
			return { color: `red` };
		case `green`:
			return { color: `green` };
		case `blue`:
			return { color: `blue` };
	}
};

const SandboxContextProvider = ({
	children,
	contextInterface = { color: `red` },
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
