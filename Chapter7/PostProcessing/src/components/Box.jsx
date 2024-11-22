import React from "react";

const Box = () => {
  return (
    <mesh castShadow position-x={2} position-y={-0.25} scale={1.5}>
      <boxGeometry />
      <meshBasicMaterial 
        color="mediumpurple"  
        // toneMapped={false}
      />
    </mesh>
  );
};

export default Box;
