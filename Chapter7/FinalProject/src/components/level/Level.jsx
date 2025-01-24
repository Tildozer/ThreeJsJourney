import { useMemo } from "react";
import { BlockEnd, BlockStart, Bounds } from "./";
import { TrapTile, Axe, Limbo, Spinner } from "./traps";

const Level = ({
  count = 5,
  traps = [Spinner, Limbo, Axe],
  order = [],
  seed = 0,
}) => {
  const end = (count + 1) * -4;

  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      const currTrap = order[i % count];

      blocks.push(
        <TrapTile
          key={i}
          position={[0, 0, (i + 1) * -4]}
          Trap={
            typeof currTrap === "number"
              ? traps[currTrap]
              : traps[Math.floor(Math.random() * traps.length)]
          }
        />,
      );
    }

    return blocks;
  }, [count, traps, order, seed]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks}
      <BlockEnd position={[0, 0, end]} />
      <Bounds length={count + 2} />
    </>
  );
};
export default Level;
