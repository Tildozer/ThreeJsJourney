import React from "react";

const Sphere = ({ position }) => {
  return (
    <mesh position={[position.x, position.y, position.z]}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
