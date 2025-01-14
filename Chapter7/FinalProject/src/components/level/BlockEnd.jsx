import { useGeometries } from "../../GeometriesContext";
import { useMaterials } from "../../MaterialsContext";

const BlockEnd = ({ position = [0, 0, 0], geometry }) => {
  const { startMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();

  return (
    <group position={position}>
      <mesh
        receiveShadow
        geometry={boxGeometry}
        position={[0, -0.05, 0]}
        scale={[4, 0.2, 4]}
        material={startMaterial}
      />
    </group>
  );
};

export default BlockEnd;
