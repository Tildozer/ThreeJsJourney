import React from "react";
import { Float, Text } from "@react-three/drei";

const Title = () => {
  return (
    <Float floatIntensity={0.25} rotationIntensity={0.25}>
      <Text
        scale={0.25}
        font="./bebas-neue-v9-latin-regular.woff"
        maxWidth={0.25}
        lineHeight={0.75}
        // textAlign="right"
        position={[0.5, 0.65, 0]}
      >
        Dice Race
        <meshBasicMaterial toneMapped={false} />
      </Text>
    </Float>
  );
};

export default Title;
