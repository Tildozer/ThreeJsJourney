import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Floor, Sphere, Cube, Lighting } from "./components";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <Lighting />

      <Sphere />
      <Cube />
      <Floor />
    </>
  );
}
