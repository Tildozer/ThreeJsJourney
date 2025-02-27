import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/**
 * Cursor
 */
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (ev) => {
  // we subtract .5 from it so that way when you are on the left or top side you are in the negatives.
  cursor.x = ev.clientX / sizes.width - 0.5;
  cursor.y = -(ev.clientY / sizes.height - 0.5);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);
// OrthographicCamera
// const aspectRatio = sizes.width/ sizes.height;
// const camera = new THREE.OrthographicCamera( -aspectRatio, aspectRatio, 1, -1, 0.1, 100);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

console.log(camera.position.length());

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
// This Example uses obit controls with damping on to make moving the object more natural.
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Animate
// const clock = new THREE.Clock();

const tick = () => {
  //   const elapsedTime = clock.getElapsedTime();

  // Update objects

  //   mesh.rotation.y = elapsedTime;

  /* 
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  camera.position.y = cursor.y * 5;
  camera.lookAt(mesh.position); 
*/
  // You have to update the controls with each animation frame request to let it continue moving.
  controls.update();
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
