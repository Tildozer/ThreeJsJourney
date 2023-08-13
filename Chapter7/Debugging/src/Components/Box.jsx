import React from "react";

const Box = ({color}) => {
  return (
    <mesh position-x={2} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color={color}/>
    </mesh>
  );
};

export default Box;
