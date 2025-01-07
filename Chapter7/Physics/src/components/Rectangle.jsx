import React, { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"

const Rectangle = () => {
  const rectangleRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(new THREE.Euler(0, time * 3, 0));

    rectangleRef.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle)* 2;
    const z = Math.sin(angle)* 2;
    
    rectangleRef.current.setNextKinematicTranslation({x, y: -0.8, z})
  });

  return (
    <RigidBody
      ref={rectangleRef} 
      position={[0, -0.8, 0]} 
      friction={0} 
      type="kinematicPosition"
    >
      <mesh castShadow scale={[0.4, 0.4, 3]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
};

export default Rectangle;
