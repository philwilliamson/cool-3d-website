import tw from "twin.macro";
import { useState } from "react";
import { SketchPicker } from "react-color";
import rgbHex from "rgb-hex";

import { useSandboxContext, useSandboxUpdateContext } from "./sandbox-context";

const SandboxControl = (): JSX.Element => {
  const sandboxContext = useSandboxContext();
  const setSandboxContext = useSandboxUpdateContext();
  // const [color, setColor] = useState(`#fff`);

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
        color={sandboxContext}
        onChange={(color, event) => {
          event.preventDefault();
          setSandboxContext(color);
          console.log(sandboxContext);
        }}
      />
    </div>
  );
};

export default SandboxControl;
