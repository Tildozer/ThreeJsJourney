import React from "react";

const Sphere = () => {
  return (
    <mesh position-y={1} castShadow position-x={-2}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
