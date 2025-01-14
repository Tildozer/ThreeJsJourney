import { useRef, useEffect, useState } from "react";
import { useMaterials } from "../MaterialsContext";
import { useGeometries } from "../GeometriesContext";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { movePlayer, jump, moveCamera } from "./utils";
import { Vector3 } from "three";

const Player = () => {
  const { playerMaterial } = useMaterials();
  playerMaterial.flatShading = true;
  const { icosahedronGeometry } = useGeometries();

  const body = useRef();
  const [smoothCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothCameraTarget] = useState(() => new Vector3());

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const {
    rapier: { Ray },
    world,
  } = useRapier();

  useEffect(() => {
    const unsubscribe = subscribeKeys(
      (state) => state.jump,
      (value) => (value ? jump(body, Ray, world) : null),
    );

    return () => unsubscribe();
    
  }, []);

  useFrame(({camera}, delta) => {
    const keys = getKeys();

    const playerPosition = movePlayer(keys, body, delta);
    moveCamera(playerPosition, camera, delta, smoothCameraPosition, smoothCameraTarget);
  });

  return (
    <RigidBody
      ref={body}
      colliders="ball"
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      canSleep={false}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh geometry={icosahedronGeometry} material={playerMaterial} />
    </RigidBody>
  );
};

export default Player;
