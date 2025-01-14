import { Spinner } from "./";
import { useMaterials } from "../../../MaterialsContext";
import { useGeometries } from "../../../GeometriesContext";

const BlockSpinner = ({ position = [0, 0, 0] }) => {
  const { floorMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();

  const traps = [Spinner],
    // Trap = traps[Math.floor(Math.random() * traps.length)];
    Trap = traps[0];

  return (
    <group position={position}>
      <Trap />
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
