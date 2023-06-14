import * as THREE from "three";
// const THREE = require("three");
const scene = new THREE.Scene();

const group = new THREE.Group();
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube2);
cube2.position.x = 2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube3);
cube3.position.x = -2;

group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

const [width, height] = [800, 600];
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;

scene.add(camera);

// camera.lookAt(mesh.position);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(width, height);
renderer.render(scene, camera);
