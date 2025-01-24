import { useGeometries } from "../../GeometriesContext";
import { useMaterials } from "../../MaterialsContext";
import useGame from "../../stores/useGame";
import Title from "./Title";

const BlockStart = ({ position = [0, 0, 0], geometry }) => {
  const { startMaterial } = useMaterials();
  const { boxGeometry } = useGeometries();
  const phase = useGame((state) => state.phase);

  return (
    <group position={position}>
      {phase === "ready" && <Title />}
      <mesh
        receiveShadow
        geometry={boxGeometry}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        material={startMaterial}
      />
    </group>
  );
};

export default BlockStart;
