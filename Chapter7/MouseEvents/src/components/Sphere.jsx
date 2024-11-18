import React from "react";

const Sphere = () => {
  return (
    <mesh
      position-x={-2}
      onClick={(ev) => ev.stopPropagation()} //this will prevent the event from bubbling up to the parent AKA Oclussion
      onPointerOver={(ev) => ev.stopPropagation()}
      onPointerOut={(ev) => ev.stopPropagation()}
    >
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
