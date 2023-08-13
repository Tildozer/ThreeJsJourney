import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Floor, Box, Sphere } from ".";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Sphere />
      <Box />
      <Floor />
    </>
  );
};

export default Experience;
