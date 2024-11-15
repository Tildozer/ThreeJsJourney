import React from "react";
import { Text3D, Center, useMatcapTexture } from "@react-three/drei";

const Text = ({ material }) => {
  return (
    <Center>
      <Text3D
        material={material}
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.75}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Hello World
      </Text3D>
    </Center>
  );
};

export default Text;
