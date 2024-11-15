import React from "react";

const Box = () => {
  return (
    <mesh scale={1.5}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Box;
