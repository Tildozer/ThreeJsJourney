import { useGLTF } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import React from "react";

const Hamburger = ({ position }) => {
  const { scene: hamburger } = useGLTF("/hamburger.glb");

  hamburger.children.forEach((child) => (child.castShadow = true));

  return (
    <RigidBody
      type="fixed"
      colliders="hull"
      position={position}
      restitution={0.2}
      friction={0}
    >
      {/* <CylinderCollider args={[0.5, 1.1]} /> */}
      <primitive object={hamburger} scale={0.25} />
    </RigidBody>
  );
};

export default Hamburger;
