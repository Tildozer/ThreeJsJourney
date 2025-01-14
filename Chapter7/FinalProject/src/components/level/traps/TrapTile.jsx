import { useMaterials } from "../../../MaterialsContext";
import { useGeometries } from "../../../GeometriesContext";

const TrapTile = ({ position = [0, 0, 0], Trap }) => {
  const { floorMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();

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

export default TrapTile;
