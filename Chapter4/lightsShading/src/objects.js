import * as THREE from "three";
import { material } from "./material";

export const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32),
  material,
);
torusKnot.position.x = 3;

export const sphere = new THREE.Mesh(new THREE.SphereGeometry(), material);
sphere.position.x = -3;
