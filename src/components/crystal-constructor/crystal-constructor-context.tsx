// here we utilize useContext with useState to allow a
import React, { useContext, useReducer, useState } from "react";

// TYPES
export enum ActionType {
	SET_COLOR = `SET_COLOR`,
}

interface Action {
	type: ActionType;
	payload?: any;
}

interface State {
	color: any;
}

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

type ContextInterface = string;

interface SandboxInterface {
	children?: React.ReactNode;
	contextInterface?: ContextInterface;
}

const SandboxContextProvider = ({
	children,
	// contextInterface = { color: `#ffffff` },
	contextInterface = `#ff0000`,
}: SandboxInterface): JSX.Element => {
	// const [sandboxContext, dispatchSandboxContext] = useReducer(
	// 	sandboxHandler,
	// 	contextInterface
	// );
	const [sandboxContext, setSandboxContext] = useState(contextInterface);
	return (
		<SandboxContext.Provider value={sandboxContext}>
			<SandboxUpdateContext.Provider value={setSandboxContext}>
				{children}
			</SandboxUpdateContext.Provider>
		</SandboxContext.Provider>
	);
};

export default SandboxContextProvider;
