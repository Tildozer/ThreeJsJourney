import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Doughnuts = ({ material }) => {
  const [torusGeometry, setTorusGeometry] = useState(null);
  const arr = [...new Array(100)];
  const doughnutGroup = useRef();

  useFrame((state, delta) => {
    for(const doughnut of doughnutGroup.current.children) {
      doughnut.rotation.x += delta * 0.01;
      doughnut.rotation.y += delta * 0.1;
    }

  });
  return (
    <group ref={doughnutGroup}>
      <torusGeometry ref={setTorusGeometry} />
      {arr.map((_, i) => (
        <mesh
          material={material}
          geometry={torusGeometry}
          key={i}
          position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        />
      ))}
    </group>
  );
};

export default Doughnuts;
