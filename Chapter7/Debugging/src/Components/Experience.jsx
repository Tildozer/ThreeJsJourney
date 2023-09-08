import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Floor, Box, Sphere } from ".";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

const Experience = () => {
  const { perfVisible } = useControls({
    perfVisible: false,
  });

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}

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
