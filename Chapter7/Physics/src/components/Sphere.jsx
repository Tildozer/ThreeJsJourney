import React from "react";

const Sphere = () => {
  return (
    <mesh castShadow position={[-2, 2, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
