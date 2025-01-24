import { Text } from "@react-three/drei";
import React from "react";

const Finish = () => {
  return (
    <Text
      scale={1}
      font="./bebas-neue-v9-latin-regular.woff"
      position={[0, 2.5, 2]}
    >
      FINISH
      <meshBasicMaterial toneMapped={false} />
    </Text>
  );
};

export default Finish;
