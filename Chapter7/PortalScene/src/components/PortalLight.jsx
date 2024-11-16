import React, {useRef} from "react";
import portalVertexShader from "../shaders/portal/vertex.glsl";
import portalFragmentShader from "../shaders/portal/fragment.glsl";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";

const PortalLight = ({ portalLight }) => {
  const portalLightRef = useRef();
  
  const PortalMaterial = shaderMaterial(
    {
      uTime: 0,
      uColorStart: new THREE.Color(0x00ffff),
      uColorEnd: new THREE.Color(0x000000),
    },
    portalVertexShader,
    portalFragmentShader,
  );
  extend({ PortalMaterial });

  useFrame((state, delta) => {
    portalLightRef.current.uTime += delta * 1.5;
  });

  return (
    <mesh
      geometry={portalLight.geometry}
      position={portalLight.position}
      rotation={portalLight.rotation}
    >
      {/* <shaderMaterial
        vertexShader={portalVertexShader}
        fragmentShader={portalFragmentShader}
        uniforms={{
          uTime: { value: 0},
          uColorStart: { value: new THREE.Color(0x00ffff)},
          uColorEnd: { value: new THREE.Color(0x000000)},
        }}
      /> */}
      <portalMaterial ref={portalLightRef}/>
    </mesh>
  );
};

export default PortalLight;
