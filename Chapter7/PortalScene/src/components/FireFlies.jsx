import { Sparkles } from "@react-three/drei";
import React from "react";

const FireFlies = () => {
  return (
    <Sparkles
      size={6}
      scale={[4, 2, 4]}
      position-y={1}
      speed={0.2}
      count={40}
    />
  );
};

export default FireFlies;
