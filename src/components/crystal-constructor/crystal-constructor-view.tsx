import tw from "twin.macro";
import React, { useRef, useState, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Line, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";

import { useCrystalConstructorContext } from "./crystal-constructor-context";

function Box({ color, position }) {
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

function LineBox({ start, end }) {
	const ref = useRef<Line>();
	useLayoutEffect(() => {
		ref.current.geometry.setFromPoints(
			[start, end].map((point) => new Vector3(...point))
		);
	}, [start, end]);
	return (
		<line ref={ref}>
			<bufferGeometry />
			<lineBasicMaterial color="hotpink" />
		</line>
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
				<LineBox start={[1, 1, 1]} end={[-1, 1, 1]} />
				<LineBox start={[1, 1, 1]} end={[1, -1, 1]} />
				<LineBox start={[1, 1, 1]} end={[1, 1, -1]} />
			</Canvas>
		</div>
	);
};

export default CrystalConstructorView;
