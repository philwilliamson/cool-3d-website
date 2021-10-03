import tw from "twin.macro";
import { useState } from "react";
import { SketchPicker, ColorResult } from "react-color";
import { ActionType } from "./crystal-constructor-context";

import {
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
			<p tw="text-white">Pick a Color</p>
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
			/>
		</div>
	);
};

export default CrystalConstructorControl;
