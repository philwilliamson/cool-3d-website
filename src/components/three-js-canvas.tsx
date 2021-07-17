import { useRef, useEffect } from "react";

import useCanvas from "../util/hooks.ts/use-canvas";

const ThreeJsCanvas = ({ draw }): JSX.Element => {
	const canvasRef = useCanvas(draw);

	return <canvas ref={canvasRef} />;
};

export default ThreeJsCanvas;
