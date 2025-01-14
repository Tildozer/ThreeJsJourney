import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";
import { useGeometries } from "../../GeometriesContext";
import { useMaterials } from "../../MaterialsContext";

const Bounds = ({ length = 1 }) => {
  const { boxGeometry } = useGeometries();
  const { wallMaterial } = useMaterials();
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <mesh
        castShadow
        scale={[0.3, 1.5, length * 4]}
        position={[2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
      />
      <mesh
        receiveShadow
        scale={[0.3, 1.5, length * 4]}
        position={[-2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
      />
      <mesh
        receiveShadow
        scale={[4, 1.5, 0.3]}
        position={[0, 0.75, -(length * 4) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
      />
      {/* floor collider */}
      <CuboidCollider
        args={[2, 0.1, 2 * length]}
        position={[0, -0.1, -(length * 2) + 2]}
        restitution={0.2}
        friction={1}
      />
    </RigidBody>
  );
};

export default Bounds;
