import tw from "twin.macro";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";

import { useSandboxContext } from "./sandbox-context";

function Box({ color, position }) {
	const mesh = useRef<Mesh>();
	// const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	useFrame((/*state, delta*/) => (mesh.current.rotation.x += 0.01));
	return (
		<mesh
			position={position}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			// onPointerOver={() => setHover(true)}
			// onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			{/* <meshStandardMaterial color={hovered ? `hotpink` : `orange`} /> */}
			{/* <meshStandardMaterial color={hovered ? `hotpink` : `orange`} /> */}
			<meshStandardMaterial color={color} />
		</mesh>
	);
}

const SandboxView = (): JSX.Element => {
	const { hex: boxColor } = useSandboxContext();

	return (
		<div css={[tw`h-full bg-black col-start-2 col-end-7`]}>
			<Canvas>
				<Stars />
				<OrbitControls />
				<pointLight position={[10, 10, 10]} />
				<Box color={boxColor} position={[0, 0, 0]} />
			</Canvas>
		</div>
	);
};

export default SandboxView;
