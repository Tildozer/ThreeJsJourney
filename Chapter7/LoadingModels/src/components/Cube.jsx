import React from "react";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { DRACOLoader } from "three/examples/jsm/Addons.js";

const Cube = ({ position, scale, args, color }) => {
  return (
    <mesh position-y={position.y} scale={scale}>
      <boxGeometry args={args} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

export default Cube;
