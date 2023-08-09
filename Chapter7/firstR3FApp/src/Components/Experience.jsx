import React from "react";
import { Ball, Floor } from ".";

const Experience = () => {
  return (
    <>
      <Floor />
      <Ball />
      <mesh rotation-y={Math.PI * 0.25} position={[2, 0, 0]} scale={1.5}>
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default Experience;
