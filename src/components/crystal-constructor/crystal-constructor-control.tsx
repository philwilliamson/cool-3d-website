import tw from "twin.macro";

import {
  ActionType,
  useCrystalConstructorContext,
  useCrystalConstructorUpdateContext,
} from "./crystal-constructor-context";

const CrystalConstructorControl = (): JSX.Element => {
  const crystalConstructorContext = useCrystalConstructorContext();
  const dispatchCrystalConstructorContext =
    useCrystalConstructorUpdateContext();

  return (
    <div
      css={[
        tw`flex flex-col justify-center items-center `,
        tw`col-start-1 col-end-2 h-screen`,
        tw`bg-gray-800`,
      ]}
    >
      <button
        tw="bg-gray-400 text-white"
        onClick={() => {
          dispatchCrystalConstructorContext({
            type: ActionType.ADD_ATOM,
          });
        }}
      >
        Add Atom
      </button>
      {/* <p tw="text-white">Pick a Color</p>
			<SketchPicker
				disableAlpha
				color={crystalConstructorContext.color}
				onChange={(color, event) => {
					event.preventDefault();
					dispatchCrystalConstructorContext({
						type: ActionType.SET_COLOR,
						payload: color.hex,
					});
					console.log(crystalConstructorContext);
				}}
			/> */}
    </div>
  );
};

export default CrystalConstructorControl;
