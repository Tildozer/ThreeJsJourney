import React from "react";
import { button, useControls, folder } from "leva";

const Sphere = () => {
  const { position, color } = useControls(
    "Sphere",
    {
      position: {
        value: { x: -2, y: 0, z: 0 },
        // min: -4,
        // max: 4,
        step: 0.01,
        // joystick: 'invertY'
      },
      color: "#ff0000",
      clickMe: button(() => console.log("click")),
      choice: { options: ["a", "b", "c", "d"] },
    },
    {
      collapsed: true,
    },
  );

  return (
    <mesh position={[position.x, position.y, position.z]}>
      <sphereGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Sphere;
