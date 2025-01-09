import { InstancedRigidBodies } from "@react-three/rapier";
import React, { useMemo } from "react";
import * as THREE from "three";

const Cubes = () => {
  const cubeCount = 100;
  const instances = useMemo(() => {
    const instances = [];
    for (let i = 0; i < cubeCount; i++) {
      const position = [
        (Math.random() - 0.5) * 8,
        6 + i * 0.2,
        (Math.random() - 0.5) * 8,
      ];
      instances.push({
        key: `instance${i}`,
        position,
        rotation: [0, 0, 0],
      });
    }

    return instances;
  }, []);

  return (
    <InstancedRigidBodies instances={instances}>
      <instancedMesh castShadow args={[null, null, cubeCount]}>
        <boxGeometry />
        <meshStandardMaterial color="tomato" />
      </instancedMesh>
    </InstancedRigidBodies>
  );
};

export default Cubes;
