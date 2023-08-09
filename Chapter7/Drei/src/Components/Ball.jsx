import { PivotControls, Html } from "@react-three/drei";
import React from "react";

const Ball = ({ refrence, objects }) => {
  return (
    <PivotControls
      anchor={[0, 0, 0]}
      depthTest={false}
      lineWidth={4}
      axisColors={["#9381ff", "#ff4d6a", "#7ae582"]}
      scale={100}
      fixed={true}
    >
      <mesh ref={refrence[0]} position-x={-2} rotation-z={Math.PI * 0.25}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
          occlude={refrence}
          // occlude="blending"
        >
          THIS IS A SPHERE
        </Html>
      </mesh>
    </PivotControls>
  );
};

export default Ball;
