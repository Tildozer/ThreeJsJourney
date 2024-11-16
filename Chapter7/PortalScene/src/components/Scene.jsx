import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import { FireFlies, PoleLights, PortalLight } from "./";

const Scene = () => {
  const { scene, nodes } = useGLTF("./model/portal.glb");

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  return (
    <>
      <mesh args={[]} geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <PoleLights poleLightA={nodes.poleLightA} poleLightB={nodes.poleLightB} />
      <PortalLight portalLight={nodes.portalLight} />
      <FireFlies />
    </>
  );
};

export default Scene;
