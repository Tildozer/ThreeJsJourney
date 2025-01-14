import { useRef, useState } from "react";
import { Quaternion, Euler } from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useMaterials } from "../../../MaterialsContext";
import { useGeometries } from "../../../GeometriesContext";

const Spinner = () => {
  const obstacle = useRef();
  const { obstacleMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();

  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1),
  );

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    const rotation = new Quaternion().setFromEuler(
      new Euler(0, elapsedTime * speed, 0),
    );

    obstacle.current.setNextKinematicRotation(rotation);
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
        scale={[3.5, 0.3, 0.3]}
      />
    </RigidBody>
  );
};

export default Spinner;
