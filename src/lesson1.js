import * as THREE from "three";
// const THREE = require("three");
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// same as doing the above
mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// Rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI / 4;
mesh.rotation.y = Math.PI / 4;

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

const [width, height] = [800, 600];
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;

scene.add(camera);

camera.lookAt(mesh.position);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(width, height);
renderer.render(scene, camera);
