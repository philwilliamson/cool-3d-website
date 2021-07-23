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
				tw`flex flex-col justify-center items-center `,
				tw`col-start-1 col-end-2 h-screen`,
				tw`bg-gray-800`,
			]}
		>
			<p tw="text-white">Pick a Color</p>
			<ColorPicker
				width={250}
				height={100}
				color={sandboxContext}
				onChange={setSandboxContext}
				hideHSV
				dark
			/>
		</div>
	);
};

export default SandboxControl;
