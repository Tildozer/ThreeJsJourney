import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  Box,
  Cubes,
  Floor,
  Hamburger,
  Rectangle,
  Sphere,
  Torus,
  Walls,
} from "./components";
import { Physics } from "@react-three/rapier";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Physics
      // debug
      // gravity={[0, -1.6, 0]}
      >
        <Walls />
        <Cubes />
        <Box />
        <Rectangle />
        <Sphere />
        {/* <Torus /> */}
        <Hamburger />
        <Floor />
      </Physics>
    </>
  );
}
