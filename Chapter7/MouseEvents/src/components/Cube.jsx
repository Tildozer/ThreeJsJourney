import { useCursor, meshBounds } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";

const Cube = ({ cube }) => {
  const [hovered, setHovered] = useState(false);
  const pointerEventHandler = (ev) => {
    // HSL = Hue, Saturation, Lightness
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
  };

  useCursor(hovered, "pointer", "default");

  return (
    <mesh
      ref={cube}
      raycast={meshBounds} // better performance
      position-x={2}
      scale={1.5}
      onClick={pointerEventHandler}
      onPointerOver={(_) => setHovered(true)}
      onPointerOut={(_) => setHovered(false)}
      // onContextMenu={ pointerEventHandler }
      // onDoubleClick={ pointerEventHandler }
      // onPointerUp={ pointerEventHandler }
      // onPointerDown={ pointerEventHandler } //this one works for left and right click
      // onPointerOver={ pointerEventHandler }
      // onPointerMove={ pointerEventHandler }
      // onPointerMissed={ pointerEventHandler }
    >
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Cube;
