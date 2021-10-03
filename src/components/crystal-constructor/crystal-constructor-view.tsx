import tw from "twin.macro";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, ReactThreeFiber, extend } from "@react-three/fiber";
import THREE, { Mesh, Line, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";

import { useCrystalConstructorContext } from "./crystal-constructor-context";

function LineBox() {
	const geom = new BoxGeometry(1, 1, 1);
	return (
		<lineSegments>
			<edgesGeometry attach="geometry" args={[geom]} />
			<lineBasicMaterial color="white" attach="material" />
		</lineSegments>
	);
}

function Box({ position }) {
	const mesh = useRef<Mesh>();
	// const [hovered, setHover] = useState(false);
	return (
		<mesh position={position} ref={mesh} scale={1}>
			<boxGeometry args={[1, 1, 1]} />
			{/* <meshStandardMaterial color={hovered ? `hotpink` : `orange`} /> */}
			{/* <meshStandardMaterial color={hovered ? `hotpink` : `orange`} /> */}
			{/* <meshStandardMaterial color={color} /> */}
			<meshBasicMaterial wireframe />
		</mesh>
	);
}

const CrystalConstructorView = (): JSX.Element => {
	const { color: boxColor } = useCrystalConstructorContext();

	return (
		<div css={[tw`h-full bg-black col-start-2 col-end-7`]}>
			<Canvas>
				<OrbitControls />
				<pointLight position={[10, 10, 10]} />
				<ambientLight intensity={0.1} />
				<LineBox />
			</Canvas>
		</div>
	);
};

export default CrystalConstructorView;
