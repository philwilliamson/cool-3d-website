// here we utilize useContext with useState to allow a
import React, { useContext, useReducer, useState } from "react";
import { ColorResult } from "react-color";

// TYPES
export enum ActionType {
	SET_COLOR = `SET_COLOR`,
}

interface Action {
	type: ActionType;
	payload?: ColorResult;
}

interface State {
	color: ColorResult;
}

// Reducer function
const crystalConstructorReducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionType.SET_COLOR:
			return { ...state, color: action.payload };
		default:
			return state;
	}
};

const initialState: State = {
	// eslint-disable-next-line unicorn/no-null
	color: `#ff0000` as unknown as ColorResult,
};

const CrystalConstructorContext = React.createContext<State>(initialState);
const CrystalConstructorUpdateContext = React.createContext<
	React.Dispatch<Action>
>(
	// eslint-disable-next-line unicorn/no-null
	() => null
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCrystalConstructorContext = (): State => {
	return useContext(CrystalConstructorContext);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCrystalConstructorUpdateContext =
	(): React.Dispatch<Action> => {
		return useContext(CrystalConstructorUpdateContext);
	};

interface CrystalConstructorInterface {
	children: React.ReactNode;
	crystalConstructorState?: State;
}

const CrystalConstructorContextProvider = ({
	children,
	crystalConstructorState = initialState,
}: CrystalConstructorInterface): JSX.Element => {
	const [crystalConstructorContext, dispatchCrystalConstructorContext] =
		useReducer(crystalConstructorReducer, crystalConstructorState);

	return (
		<CrystalConstructorContext.Provider value={crystalConstructorContext}>
			<CrystalConstructorUpdateContext.Provider
				value={dispatchCrystalConstructorContext}
			>
				{children}
			</CrystalConstructorUpdateContext.Provider>
		</CrystalConstructorContext.Provider>
	);
};

export default CrystalConstructorContextProvider;
