import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Floor, Box, Sphere } from ".";
import { button, useControls } from "leva";

const Experience = () => {
  const { position, color } = useControls({
    position: { 
      value: {x: -2, y: 0, z: 0}, 
      // min: -4, 
      // max: 4, 
      step: 0.01,
      // joystick: 'invertY'
    },
    color: '#ff0000',
    clickMe: button(() => console.log("click")),
    choice: { options: ['a', 'b', 'c', 'd']}
  });

  // const 

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Sphere position={position} />
      <Box color={color}/>
      <Floor />
    </>
  );
};

export default Experience;
