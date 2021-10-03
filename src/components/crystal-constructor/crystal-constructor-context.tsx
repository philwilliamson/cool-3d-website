// here we utilize useContext with useState to allow a
import React, { useContext, useReducer, useEffect } from "react";
import { ColorResult } from "react-color";

// TYPES
export enum ActionType {
  SET_COLOR = `SET_COLOR`,
  ADD_ATOM = `ADD_ATOM`,
}

interface Action {
  type: ActionType;
  payload?: string;
}

interface State {
  color: string;
  atomsPosList: number[][];
}

// Reducer function
const crystalConstructorReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SET_COLOR:
      return { ...state, color: action.payload };
    case ActionType.ADD_ATOM:
      return {
        ...state,
        atomsPosList: [
          ...state.atomsPosList,
          [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
        ],
      };
    default:
      return state;
  }
};

const initialState: State = {
  // eslint-disable-next-line unicorn/no-null
  color: `#ff0000`,
  atomsPosList: [],
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

  // useEffect(() => {
  //   console.table(crystalConstructorContext);
  // }, [crystalConstructorContext]);

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
