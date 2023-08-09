import React from "react";

const Ball = () => {
  return (
    <mesh position={[-2, 0, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Ball;
