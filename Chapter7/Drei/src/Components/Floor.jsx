import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";

const Floor = () => {
  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry />
      <MeshReflectorMaterial
        color="greenyellow"
        blur={[1000, 1000]}
        mixBlur={1}
        mirror={0.5}
      />
    </mesh>
  );
};

export default Floor;
