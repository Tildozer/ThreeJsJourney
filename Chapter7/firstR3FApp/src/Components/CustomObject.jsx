import React, { useMemo, useRef, useEffect } from "react";
import { DoubleSide } from "three";

const CustomObject = () => {
  const geometryRef = useRef();
  const verteciesCount = 10 * 3;

  const positions = useMemo(() => {
    const positions = new Float32Array(verteciesCount * 3);

    for (let i = 0; i < verteciesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  useEffect(() => {
    // console.log(geometryRef.current.)
    geometryRef.current.computeVertexNormals();
  }, []);
  return (
    <mesh>
      {/* <boxGeometry /> */}
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verteciesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial side={DoubleSide} color={"red"} />
    </mesh>
  );
};

export default CustomObject;
