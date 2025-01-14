import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Lights() {
  // const directionalLight = useRef();
  // useHelper(directionalLight, DirectionalLightHelper, 1, 'red');

  return (
    <>
      <directionalLight
        // ref={directionalLight}
        castShadow
        position={[4, 4, 1]}
        intensity={4.5}
        shadow-mapSize={[1024 * 2, 1024 * 2]}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-camera-top={10}
        shadow-camera-right={40}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />

      <ambientLight intensity={1.5} />
    </>
  );
}
