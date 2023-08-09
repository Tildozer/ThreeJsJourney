import React, { useRef } from "react";
import { OrbitControls, Text, Float } from "@react-three/drei";
import { Ball, Box, Floor } from ".";

const Experience = () => {
  const cube = useRef();
  const ball = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Ball refrence={[ball, cube]} />
      <Box refrence={cube} />
      <Floor />
      <Float floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          color={"salmon"}
          fontSize={1}
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          BIG
        </Text>
      </Float>
    </>
  );
};

export default Experience;
