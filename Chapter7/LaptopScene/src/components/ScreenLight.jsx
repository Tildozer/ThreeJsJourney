import React from "react";

const ScreenLight = () => {
  return (
    <rectAreaLight
      width={2.5}
      height={1.65}
      intensity={65}
      color={"#ff6900"}
      rotation={[0.1, Math.PI, 0]}
      position={[0, 0.55, -1.15]}
    />
  );
};

export default ScreenLight;
