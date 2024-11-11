import React from "react";

const Floor = ({ envMapIntensity }) => {
  return (
    <mesh
      // receiveShadow
      position-y={0}
      rotation-x={-Math.PI * 0.5}
      scale={10}
    >
      <planeGeometry />
      <meshStandardMaterial
        color="greenyellow"
        envMapIntensity={envMapIntensity}
      />
    </mesh>
  );
};

export default Floor;
