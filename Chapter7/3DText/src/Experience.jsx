import { OrbitControls, useMatcapTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Box, Doughnuts, Text } from "./Components/";
import { useState, useEffect } from "react";
import * as THREE from "three";

export default function Experience() {
  const [matcapTexture1] = useMatcapTexture("6E524D_8496C5_AF6624_100B11", 256);
  const [matcapTexture2] = useMatcapTexture("1D2A21_43443B_655B54_545C54", 256);

  const [matcap1, setMatcap1] = useState(null);
  const [matcap2, setMatcap2] = useState(null);
  // const matcap1 = new THREE.MeshMatcapMaterial();

  // useEffect(() => {
  //   matcapTexture1.colorSpace = THREE.SRGBColorSpace;
  //   matcapTexture1.needsUpdate = true;

  //   matcap1.matcap = matcapTexture1;
  //   matcap1.needsUpdate = true;

  // }, [])
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <color attach="background" args={["#bcf5f1"]} />
      <meshMatcapMaterial matcap={matcapTexture1} ref={setMatcap1} />
      <meshMatcapMaterial matcap={matcapTexture2} ref={setMatcap2} />
      {/* <Box /> */}
      <Doughnuts material={matcap1} />
      <Text material={matcap2} />
    </>
  );
}
