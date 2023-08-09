import React from "react";

const Box = ({ refrence }) => {
  return (
    <mesh
      ref={refrence}
      rotation-y={Math.PI * 0.25}
      position={[2, 0, 0]}
      scale={1.5}
    >
      {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
      <boxGeometry scale={1.5} />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Box;
