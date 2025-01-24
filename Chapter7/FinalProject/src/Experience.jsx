// import { OrbitControls } from "@react-three/drei";
import { Level, Lights, Player } from "./components";
import { Physics } from "@react-three/rapier";
import useGame from "./stores/useGame";
import { Sky } from "@react-three/drei";

const Experience = () => {
  const blocksCount = useGame((state) => state.blocksCount);
  const blockSeed = useGame((state) => state.blockSeed);

  const sunPosition = [0, 3, 0];

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <color args={["#bdedfc"]} attach="background" />
      <Physics
      // debug
      >
        <Lights />
        <Player />
        <Level count={blocksCount} seed={blockSeed} />
      </Physics>
    </>
  );
};

export default Experience;
