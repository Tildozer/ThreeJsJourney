import React from "react";
import { useMaterials } from "../MaterialsContext";
import { useGeometries } from "../GeometriesContext";
import { RigidBody } from "@react-three/rapier";

const Player = () => {
  const { playerMaterial } = useMaterials();
  playerMaterial.flatShading = true;

  const { icosahedronGeometry } = useGeometries();

  return (
    <RigidBody colliders="ball" restitution={0.2} friction={1} canSleep={false}>
      <mesh
        position={[0, 1, 0]}
        geometry={icosahedronGeometry}
        material={playerMaterial}
      />
    </RigidBody>
  );
};

export default Player;
