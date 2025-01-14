import React, { createContext, useContext } from "react";
import { BoxGeometry, SphereGeometry, CylinderGeometry } from "three";

const GeometriesContext = createContext();

export const GeometriesProvider = ({ children }) => {
  const geometries = {
    boxGeometry: new BoxGeometry(1, 1, 1),
    // sphereGeometry: new SphereGeometry(0.5, 32, 32),
    // cylinderGeometry: new CylinderGeometry(0.5, 0.5, 1, 32)
  };

  return (
    <GeometriesContext.Provider value={geometries}>
      {children}
    </GeometriesContext.Provider>
  );
};

export const useGeometries = () => useContext(GeometriesContext);
