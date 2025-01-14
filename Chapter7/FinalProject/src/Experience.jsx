import { OrbitControls } from "@react-three/drei";
import { Level, Lights, Player } from "./components";
import { Physics } from "@react-three/rapier";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics 
        // debug
      >
        <Lights />
        <Player />
        <Level />
      </Physics>
    </>
  );
};

export default Experience;
