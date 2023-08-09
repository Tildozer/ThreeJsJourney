import React from "react";

const Ball = () => {
  return (
    <mesh position-x={-2}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Ball;
