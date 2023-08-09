import { TransformControls } from "@react-three/drei";
import React from "react";

const Box = ({ refrence }) => {
  return (
    <>
      <mesh ref={refrence} position-x={2} scale={1}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={refrence} />
    </>
  );
};

export default Box;
