import React from "react";

const Sphere = () => {
  return (
    <mesh castShadow position-x={-2}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
