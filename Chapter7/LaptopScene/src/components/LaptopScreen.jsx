import { Html } from "@react-three/drei";
import React from "react";

const LaptopScreen = () => {
  return (
    <Html
      transform
      wrapperClass="laptop-screen"
      distanceFactor={1.1}
      position={[0.02, 1.5, -1.4]}
      rotation-x={-0.256}
    >
      <iframe src="https://bruno-simon.com/html/" />
    </Html>
  );
};

export default LaptopScreen;
