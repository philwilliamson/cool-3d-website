// here we utilize useContext with useState to allow a
import React, { useContext, useState } from "react";

const LoadedContext = React.createContext(false);
const LoadedUpdateContext = React.createContext(undefined);

// functions for accessing the respective contexts
export const useLoadedContext = () => {
	return useContext(LoadedContext);
};

export const useLoadedUpdateContext = () => {
	return useContext(LoadedUpdateContext);
};

const LoadedProvider = ({ children }) => {
	// here we wrap our context providers in the LoadedProvider componenent
	// children can then access the state and setState function through this component

	// set initial state for callback function using an empty function as the initial state variable
	const [loaded, setLoaded] = useState(false);
	return (
		<LoadedContext.Provider value={loaded}>
			<LoadedUpdateContext.Provider value={setLoaded}>
				{children}
			</LoadedUpdateContext.Provider>
		</LoadedContext.Provider>
	);
};

export default LoadedProvider;
