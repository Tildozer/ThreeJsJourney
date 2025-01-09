import React from "react";
import { RigidBody, CylinderCollider } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

const Hamburger = () => {
  const hamburger = useGLTF("./hamburger.glb");

  return (
    <RigidBody
      colliders={false}
      // colliders="hull"
      position={[3, 1, -3]}
    >
      <CylinderCollider args={[0.5, 1.1]} />

      <primitive object={hamburger.scene} scale={0.25} />
    </RigidBody>
  );
};

export default Hamburger;
