// here we utilize useContext with useState to allow a
import React, { useContext, useReducer, useState } from "react";

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

// interface ContextInterface {
// 	color?: string;
// }

type ContextInterface = string;

interface SandboxInterface {
  children?: React.ReactNode;
  contextInterface?: ContextInterface;
}

// const sandboxHandler = (sandboxContext, action): ContextInterface => {
// 	switch (action.type) {
// 		case `red`:
// 			return { color: `#ff0000` };
// 		case `yellow`:
// 			return { color: `#ffff00` };
// 		case `green`:
// 			return { color: `#00ff00` };
// 		case `cyan`:
// 			return { color: `#00ffff` };
// 		case `blue`:
// 			return { color: `#0000ff` };
// 		case `magenta`:
// 			return { color: `#ff00ff` };
// 		default:
// 			return { color: `#ffffff` };
// 	}
// };

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
      {/* <SandboxUpdateContext.Provider value={dispatchSandboxContext}> */}
      <SandboxUpdateContext.Provider value={setSandboxContext}>
        {children}
      </SandboxUpdateContext.Provider>
    </SandboxContext.Provider>
  );
};

export default SandboxContextProvider;
