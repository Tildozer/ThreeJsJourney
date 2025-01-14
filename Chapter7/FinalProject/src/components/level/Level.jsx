import { BlockStart } from "./";
import { TrapTile } from "./traps";

const Level = () => {
  return (
    <>
      <BlockStart position={[0, 0, 4]} />
      <TrapTile position={[0, 0, 0]} />
    </>
  );
};

export default Level;
