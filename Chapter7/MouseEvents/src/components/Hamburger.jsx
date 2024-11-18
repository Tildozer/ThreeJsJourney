import { useGLTF } from "@react-three/drei";
import React from "react";

const Hamburger = () => {
  const { scene } = useGLTF("./hamburger.glb");
  const handleClick = (ev) => {
    ev.stopPropagation();
    console.log(ev.object.name);
  };

  return (
    <primitive
      object={scene}
      scale={0.25}
      position-y={0.75}
      onClick={handleClick}
    />
  );
};

export default Hamburger;
