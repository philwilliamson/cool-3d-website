import tw from "twin.macro";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, ReactThreeFiber, extend } from "@react-three/fiber";
import THREE, { Mesh, LineSegments, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";

import { useCrystalConstructorContext } from "./crystal-constructor-context";

function LineBox() {
  const geom = new BoxGeometry(1, 1, 1);
  const lineSegments = useRef<LineSegments>();
  return (
    <lineSegments ref={lineSegments}>
      <edgesGeometry attach="geometry" args={[geom]} />
      <lineBasicMaterial color="white" attach="material" />
    </lineSegments>
  );
}

function Atom({ position }) {
  const mesh = useRef<Mesh>();
  return (
    <mesh position={position} ref={mesh} scale={1}>
      <sphereGeometry args={[0.1, 32, 16]} />
      <meshStandardMaterial color={`red`} />
    </mesh>
  );
}

const CrystalConstructorView = (): JSX.Element => {
  const { color: boxColor, atomsPosList } = useCrystalConstructorContext();

  return (
    <div css={[tw`h-full bg-black col-start-2 col-end-7`]}>
      <Canvas>
        <OrbitControls />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.1} />
        {atomsPosList.map((atomPos, i) => {
          return <Atom key={i} position={atomPos} />;
        })}
        <LineBox />
      </Canvas>
    </div>
  );
};

export default CrystalConstructorView;
