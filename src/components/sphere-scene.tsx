import tw from "twin.macro";

import useCanvasRef from "../hooks/use-canvas-ref";

const SphereScene = (): JSX.Element => {
  const canvasRef = useCanvasRef({});

  return <div ref={canvasRef} css={[tw`w-full h-full`]}></div>;
};

export default SphereScene;
