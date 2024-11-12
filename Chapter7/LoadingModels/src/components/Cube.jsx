import React from "react";

const Cube = () => {
  return (
    <mesh castShadow position-x={2} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Cube;
