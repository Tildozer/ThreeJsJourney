import React, { useRef } from "react";
import { Ball, Box, Floor, CustomObject } from ".";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

extend({ OrbitControls });

const Experience = () => {
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    // const angle = state.clock.elapsedTime ;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0)
    // groupRef.current.rotation.y += delta;
    // console.log("tick");
  });
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.3} />
      <CustomObject />
      <group ref={groupRef}>
        <Ball />
        <Box refrence={cubeRef} />
      </group>
      <Floor />
    </>
  );
};

export default Experience;
