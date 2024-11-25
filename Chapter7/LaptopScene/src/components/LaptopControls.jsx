import React from "react";
import { Float, PresentationControls } from "@react-three/drei";

const LaptopControls = ({ children }) => {
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4}>{children}</Float>
    </PresentationControls>
  );
};

export default LaptopControls;
