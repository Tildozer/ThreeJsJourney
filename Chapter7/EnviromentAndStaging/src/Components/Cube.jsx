import React from "react";

const Cube = ({ cube }) => {
  return (
    <mesh ref={cube} position-x={2} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Cube;
