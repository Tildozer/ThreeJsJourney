// import { OrbitControls } from "@react-three/drei";
import { Level, Lights, Player } from "./components";
import { Physics } from "@react-three/rapier";
import useGame from "./stores/useGame";

const Experience = () => {
  const blocksCount = useGame((state) => state.blocksCount);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Physics
      // debug
      >
        <Lights />
        <Player />
        <Level count={blocksCount} />
      </Physics>
    </>
  );
};

export default Experience;
