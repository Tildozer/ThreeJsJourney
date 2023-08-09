import React from "react";

const Box = () => {
  return (
    <mesh position-x={2} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Box;
