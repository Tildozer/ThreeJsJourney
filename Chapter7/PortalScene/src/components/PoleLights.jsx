import React from "react";

const PoleLights = ({ poleLightA, poleLightB }) => {
  return (
    <>
      <mesh geometry={poleLightA.geometry} position={poleLightA.position}>
        <meshBasicMaterial color="#ffffe5" />
      </mesh>
      <mesh geometry={poleLightB.geometry} position={poleLightB.position}>
        <meshBasicMaterial color="#ffffe5" />
      </mesh>
    </>
  );
};

export default PoleLights;
