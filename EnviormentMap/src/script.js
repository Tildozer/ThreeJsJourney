import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { RGBELoader } from "three/addons/loaders/RGBELoader";
import { EXRLoader } from "three/addons/loaders/EXRLoader";
import { GroundProjectedSkybox } from "three/addons/objects/GroundProjectedSkybox"
import * as dat from "lil-gui";

/**
 * Loaders
 */
const LoadingManager = new THREE.LoadingManager(
  () => console.log("loaded"),
  () => console.log("..."),
  (url) => console.log(url)
);

const gltfLoader = new GLTFLoader(LoadingManager);
const cubeTextureLoader = new THREE.CubeTextureLoader(LoadingManager);
const rgbeLoader = new RGBELoader(LoadingManager);
const exrLoader = new EXRLoader(LoadingManager);
const textureLoader = new THREE.TextureLoader(LoadingManager);

/**
 * Base
 */
// Debug
const gui = new dat.GUI();
const globalSettings = {};

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const updateAllMaterial = () => {
  scene.traverse((child) => {
    child.isMesh && child.material.isMeshStandardMaterial
      ? (child.material.envMapIntensity = globalSettings.envMapIntensity)
      : null;
  });
};

/**
 * Enviroment Map
 */
scene.backgroundBlurriness = 0;
scene.backgroundIntensity = 1;
globalSettings.envMapIntensity = 1;

gui.add(scene, "backgroundIntensity").min(0).max(10).step(0.001);
gui.add(scene, "backgroundBlurriness").min(0).max(1).step(0.001);
gui
  .add(globalSettings, "envMapIntensity")
  .min(0)
  .max(10)
  .step(0.001)
  .onChange(updateAllMaterial);
// LDR Cube Texture
// const enviromentMap = cubeTextureLoader.load([
//   "/environmentMaps/0/px.png",
//   "/environmentMaps/0/nx.png",
//   "/environmentMaps/0/py.png",
//   "/environmentMaps/0/ny.png",
//   "/environmentMaps/0/pz.png",
//   "/environmentMaps/0/nz.png",
// ]);
// scene.background = enviromentMap;
// scene.environment = enviromentMap;

// HDR (RGBE) equirectantangular
// 
// rgbeLoader.load(
//   "/environmentMaps/0/2k.hdr",
//   (enviromentMap) => {
//     console.log(enviromentMap);
//     enviromentMap.mapping = THREE.EquirectangularReflectionMapping;
//     scene.background = enviromentMap;
//     scene.environment = enviromentMap;
//   }
// )

//  HRD (EXR) equirectantangular

// exrLoader.load(
//   '/environmentMaps/nvidiaCanvas-4k.exr', 
//   (envMap) => {
//     console.log(envMap);
//         envMap.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = envMap;
//         scene.environment = envMap;
// })

// LDR equirectantangular
// const enviromentMap = textureLoader.load('/environmentMaps/blockadesLabsSkybox/anime_art_style_japan_streets_with_cherry_blossom_.jpg');

// enviromentMap.mapping = THREE.EquirectangularReflectionMapping;

// enviromentMap.colorSpace = THREE.SRGBColorSpace;
// scene.background = enviromentMap;
// scene.environment = enviromentMap;

// Ground projected skybox

// rgbeLoader.load(
//   '/environmentMaps/2/2k.hdr',
//   (enviromentMap) => {
//     enviromentMap.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = enviromentMap;

//     const skybox = new GroundProjectedSkybox(enviromentMap);
//     skybox.scale.setScalar(50)
//     scene.add(skybox);

//     gui.add(skybox, 'radius', 1, 200, 0.1).name('skyboxRaduis');
//     gui.add(skybox, 'height', 1, 200, 0.1).name('skyboxHeight');
//   }
// )

/**
 * Real Time Enviroment Map
 */


// 
/**
 * Torus Knot
 */
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
  new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 1,
    color: 0xaaaaaa,
  })
);
torusKnot.position.y = 4;
torusKnot.position.x = -4;
scene.add(torusKnot);

/**
 * Models
 */
gltfLoader.load("/models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
  gltf.scene.scale.set(10, 10, 10);
  scene.add(gltf.scene);

  updateAllMaterial();
});
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(4, 5, 4);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.target.y = 3.5;
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
