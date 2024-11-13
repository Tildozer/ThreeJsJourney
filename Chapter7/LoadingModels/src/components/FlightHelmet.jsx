import React from "react";
import { useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { DRACOLoader } from "three/examples/jsm/Addons.js";

const FlightHelmet = () => {
  // const model = useLoader(
  //     GLTFLoader,
  //     "./FlightHelmet/glTF/FlightHelmet.gltf",
  //     loader => {
  //       const dracoLoader = new DRACOLoader();
  //       dracoLoader.setDecoderPath("./draco/");
  //       loader.setDRACOLoader(dracoLoader);
  //     }
  //   );

  const model = useGLTF("./FlightHelmet/glTF/FlightHelmet.gltf");

  return <primitive object={model.scene} scale={5} position-y={-1} />;
};

export default FlightHelmet;
