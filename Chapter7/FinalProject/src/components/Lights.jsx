// import { useHelper } from "@react-three/drei";
// import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Lights() {
  const directionalLight = useRef();
  // useHelper(directionalLight, DirectionalLightHelper, 1, 'red');

  useFrame((state) => {
    directionalLight.current.position.z = state.camera.position.z + 1 - 4;
    directionalLight.current.target.position.z = state.camera.position.z - 4;
    directionalLight.current.target.updateMatrixWorld();
    // directionalLight.current.position.x;
  });

  return (
    <>
      <directionalLight
        ref={directionalLight}
        castShadow
        position={[4, 4, 1]}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />

      <ambientLight intensity={1.5} />
    </>
  );
}
