import { Axe, Limbo, Spinner } from "./";
import { useMaterials } from "../../../MaterialsContext";
import { useGeometries } from "../../../GeometriesContext";

const BlockSpinner = ({ position = [0, 0, 0], i }) => {
  const { floorMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();

  const traps = [Spinner, Limbo, Axe],
    Trap = traps[i % 3];
    // Trap = traps[2];

  return (
    <group position={position}>
      <Trap position={position} />
      <mesh
        receiveShadow
        geometry={boxGeometry}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        material={floorMaterial}
      />
    </group>
  );
};

export default BlockSpinner;
