import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useMaterials } from "../../../MaterialsContext";
import { useGeometries } from "../../../GeometriesContext";

const Limbo = ({ position }) => {
  const obstacle = useRef();
  const { obstacleMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();

  const [timeOffSet] = useState(() => (Math.random() + 0.2) * Math.PI * 2);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    const x = Math.sin(elapsedTime + timeOffSet) * 1.25;

    obstacle.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 0.75,
      z: position[2],
    });
  });

  return (
    <RigidBody
      ref={obstacle}
      type="kinematicPosition"
      position={[0, 0.3, 0]}
      restitution={0.2}
      friction={0}
    >
      <mesh
        castShadow
        geometry={boxGeometry}
        material={obstacleMaterial}
        scale={[1.5, 1.5, 0.3]}
      />
    </RigidBody>
  );
};

export default Limbo;
