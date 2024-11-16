import { OrbitControls, Center } from "@react-three/drei";
import { PoleLights, Scene } from "./components";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#030202"]} />

      <OrbitControls makeDefault />

      <Center>
        <Scene />
      </Center>
    </>
  );
}
