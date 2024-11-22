import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Box, Floor, PostProcessing, Sphere } from "./components";

export default function Experience() {

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <color 
        attach="background" 
        color="white"
      />

      <PostProcessing>
      </PostProcessing>
      <Sphere />
      <Box />
      <Floor />
    </>
  );
}
