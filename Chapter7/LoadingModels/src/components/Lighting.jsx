import React from "react";

const Lighting = () => {
  return (
    <>
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />
    </>
  );
};

export default Lighting;
