import React, { createContext, useContext } from "react";
import { MeshStandardMaterial } from "three";

const MaterialsContext = createContext();

export const MaterialsProvider = ({ children }) => {
  const materials = {
    startMaterial: new MeshStandardMaterial({ color: "limegreen" }),
    floorMaterial: new MeshStandardMaterial({ color: "greenyellow" }),
    wallMaterial: new MeshStandardMaterial({ color: "slategray" }),
    obstacleMaterial: new MeshStandardMaterial({ color: "orangered" }),
    playerMaterial: new MeshStandardMaterial({ color: "mediumpurple" }),
  };

  return (
    <MaterialsContext.Provider value={materials}>
      {children}
    </MaterialsContext.Provider>
  );
};

export const useMaterials = () => useContext(MaterialsContext);
