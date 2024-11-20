import React from "react";

const Box = () => {
  return (
    <mesh castShadow position-x={2} position-y={-0.25} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color={[1.5, 1, 4]} />
    </mesh>
  );
};

export default Box;
