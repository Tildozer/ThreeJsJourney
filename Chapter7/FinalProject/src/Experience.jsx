import { OrbitControls } from "@react-three/drei";
import { Level, Lights } from "./components";
import { Physics } from "@react-three/rapier";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics debug>
        <Lights />
        <Level />
      </Physics>
    </>
  );
};

export default Experience;
