import React from "react";

const Sphere = () => {
  return (
    <mesh position-x={-2}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
