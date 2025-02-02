import * as THREE from "three";

export const directionalLightParameters = {
  position: [0, 0, 3],
  color: new THREE.Color(0.1, 0.1, 1),
  intensity: 1,
};

export const directionalLightHelper = new THREE.Mesh(
  new THREE.PlaneGeometry(),
  new THREE.MeshBasicMaterial({ color: new THREE.Color(0.1, 0.1, 1) }),
);
directionalLightHelper.material.side = THREE.DoubleSide;
directionalLightHelper.position.set(...directionalLightParameters.position);

export const pointLightHelper = new THREE.Mesh(
  new THREE.IcosahedronGeometry(0.1, 2),
  new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.1, 0.1) }),
);
pointLightHelper.position.set(0, 2.5, 0);
