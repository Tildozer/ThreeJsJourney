import React from "react";
import { RigidBody } from "@react-three/rapier";

const Floor = () => {
  return (
    <RigidBody type="fixed">
      <mesh receiveShadow position-y={-1.25}>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
