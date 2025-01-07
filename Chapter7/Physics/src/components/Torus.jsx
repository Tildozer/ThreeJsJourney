import React from "react";
import {
  RigidBody,
  CuboidCollider,
  BallCollider,
  CapsuleCollider,
} from "@react-three/rapier";

const Torus = () => {
  return (
    <RigidBody
      colliders="trimesh"
      // colliders={false}
      rotation-x={Math.PI * 0.5}
      position={[-1.5, 1, 0]}
    >
      {/* <CuboidCollider args={[1.5, 1.5, 0.5]}/> */}
      {/* <BallCollider args={[1]}/> */}
      {/* <CapsuleCollider  args={[1, 0.5]}/> */}
      <mesh castShadow>
        <torusGeometry args={[1, 0.5, 16, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
};

export default Torus;
