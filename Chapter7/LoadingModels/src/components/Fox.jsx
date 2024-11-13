import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

const Fox = () => {
  const { scene, animations } = useGLTF("./Fox/glTF/Fox.gltf");
  const { actions, names } = useAnimations(animations, scene);

  const { animation } = useControls({
    animation: { value: "Run", options: names },
  });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();

    return () => {
      actions[animation].fadeOut(0.5);
    };
  }, [animation]);

  return (
    <primitive
      object={scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
};

export default Fox;
