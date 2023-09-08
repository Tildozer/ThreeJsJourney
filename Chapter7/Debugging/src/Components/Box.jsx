import React from "react";
import { useControls } from "leva";

const Box = () => {
  const { scale } = useControls(
    "cube",
    {
      scale: {
        value: 1.5,
        step: 0.01,
        min: 0,
        max: 5,
      },
    },
    {
      collapsed: true,
    },
  );

  return (
    <mesh position-x={2} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Box;
