import tw from "twin.macro";
import { useSandboxContext, useSandboxUpdateContext } from "./sandbox-context";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useState } from "react";

const SandboxControl = (): JSX.Element => {
	const sandboxContext = useSandboxContext();
	const setSandboxContext = useSandboxUpdateContext();

	return (
		<div
			css={[
				tw`flex justify-center items-center `,
				tw`col-start-1 col-end-2 h-screen`,
				tw`bg-gray-800`,
			]}
		>
			<ColorPicker
				width={456}
				height={228}
				color={sandboxContext}
				onChange={setSandboxContext}
				hideHSV
				dark
			/>
		</div>
	);
};

export default SandboxControl;
