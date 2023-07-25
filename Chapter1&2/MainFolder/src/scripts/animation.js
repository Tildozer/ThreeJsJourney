import * as THREE from "three";
import gsap from "gsap";
// const THREE = require("three");
const scene = new THREE.Scene();

console.log(gsap);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, 0);
scene.add(mesh);

const [width, height] = [800, 600];
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;

scene.add(camera);

camera.lookAt(mesh.position);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(width, height);

// const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

// Animations
const tick = () => {
  //     const elapsedTime = clock.getElapsedTime();
  //   // Update objects
  // //   mesh.rotation.y = elapsedTime * Math.PI * 2;
  // //   mesh.position.y = Math.sin(elapsedTime);
  // //   mesh.position.x = Math.cos(elapsedTime);
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
