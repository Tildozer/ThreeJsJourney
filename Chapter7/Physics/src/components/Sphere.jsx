import React from "react";
import { RigidBody } from "@react-three/rapier";

const Sphere = () => {
  return (
    <RigidBody
      colliders="ball"
      // restitution={1}
    >
      <mesh castShadow position={[-1.5, 4, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
};

export default Sphere;
