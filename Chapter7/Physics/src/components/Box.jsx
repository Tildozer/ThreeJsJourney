import React from "react";

const Box = () => {
  return (
    <mesh castShadow position={[2, 2, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Box;
