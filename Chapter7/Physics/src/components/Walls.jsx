import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";

const Walls = () => {
  return (
    <RigidBody type="fixed">
      <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.25]} />
      <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.25]} />
      <CuboidCollider args={[0.5, 2, 5]} position={[5.25, 1, 0]} />
      <CuboidCollider args={[0.5, 2, 5]} position={[-5.25, 1, 0]} />
    </RigidBody>
  );
};

export default Walls;
