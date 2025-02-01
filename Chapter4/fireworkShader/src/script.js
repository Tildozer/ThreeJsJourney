import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Sky } from "three/addons/objects/Sky.js";
import GUI from "lil-gui";
import { fireworkTextures } from "./textures";
import sizes from "./sizes";
import createRandomFirework from "./createFirework";

/**
 * Base
 */
// Debug
const gui = new GUI({ width: 340 });

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);
  sizes.resolution.set(
    sizes.width * sizes.pixelRatio,
    sizes.height * sizes.pixelRatio,
  );

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(sizes.pixelRatio);
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  25,
  sizes.width / sizes.height,
  0.1,
  100,
);
camera.position.set(1.5, 0, 6);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(sizes.pixelRatio);

createRandomFirework(scene);

window.addEventListener("click", () => {
  createRandomFirework(scene);
});

// Sky

// Add Sky

const sky = new Sky();
sky.scale.setScalar(450000);
scene.add(sky);

const sun = new THREE.Vector3();

/// GUI

const skyParameters = {
  turbidity: 10,
  rayleigh: 3,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.95,
  elevation: -2.2,
  azimuth: 180,
  exposure: renderer.toneMappingExposure,
};

function guiChanged() {
  const uniforms = sky.material.uniforms;
  uniforms["turbidity"].value = skyParameters.turbidity;
  uniforms["rayleigh"].value = skyParameters.rayleigh;
  uniforms["mieCoefficient"].value = skyParameters.mieCoefficient;
  uniforms["mieDirectionalG"].value = skyParameters.mieDirectionalG;

  const phi = THREE.MathUtils.degToRad(90 - skyParameters.elevation);
  const theta = THREE.MathUtils.degToRad(skyParameters.azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  uniforms["sunPosition"].value.copy(sun);

  renderer.toneMappingExposure = skyParameters.exposure;
  renderer.render(scene, camera);
}

gui.add(skyParameters, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
gui.add(skyParameters, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
gui.add(skyParameters, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
gui.add(skyParameters, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
gui.add(skyParameters, "elevation", -3, 90, 0.1).onChange(guiChanged);
gui.add(skyParameters, "azimuth", -180, 180, 0.1).onChange(guiChanged);
gui.add(skyParameters, "exposure", 0, 1, 0.0001).onChange(guiChanged);

guiChanged();

/**
 * Animate
 */
const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
