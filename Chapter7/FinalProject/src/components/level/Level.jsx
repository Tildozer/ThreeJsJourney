import { BlockEnd, BlockStart } from "./";
import { TrapTile } from "./traps";

const Level = () => {
  const arr = new Array(Math.ceil(Math.random() * 4) + 3).fill(null);
  const end = arr.length * -4;
  
  const makeTraps = () => {
    return arr.map((_, i) => {
      return <TrapTile key={i} position={[0, 0, i * -4]} i={i} />;
    });
  };

  return (
    <>
      <BlockStart position={[0, 0, 4]} />
      {makeTraps()}
      <BlockEnd position={[0, 0, end]} />
    </>
  );
};

export default Level;
