import * as THREE from "three";
import sizes from "./sizes";
import fireworkVertexShader from "./shaders/firework/vertex.glsl";
import fireworkFragmentShader from "./shaders/firework/fragment.glsl";
import gsap from "gsap";
import { fireworkTextures } from "./textures";

const createFirework = (
  scene,
  count,
  position,
  size = 50,
  texture,
  radius,
  color,
) => {
  const positionArr = new Float32Array(count * 3);
  const sizeArr = new Float32Array(count);
  const timeMultipliersArr = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const spherical = new THREE.Spherical(
      radius * (0.75 + Math.random() * 0.25),
      Math.random() * Math.PI,
      Math.random() * Math.PI * 2,
    );

    const position = new THREE.Vector3().setFromSpherical(spherical);

    positionArr[i3 + 0] = position.x;
    positionArr[i3 + 1] = position.y;
    positionArr[i3 + 2] = position.z;

    sizeArr[i] = Math.random();
    timeMultipliersArr[i] = 1 + Math.random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positionArr, 3),
  );
  geometry.setAttribute("aSize", new THREE.Float32BufferAttribute(sizeArr, 1));
  geometry.setAttribute(
    "aTimeMultiplier",
    new THREE.Float32BufferAttribute(timeMultipliersArr, 1),
  );

  texture.flipY = false;
  const material = new THREE.ShaderMaterial({
    vertexShader: fireworkVertexShader,
    fragmentShader: fireworkFragmentShader,
    uniforms: {
      uSize: new THREE.Uniform(size),
      uResolution: new THREE.Uniform(sizes.resolution),
      uTexture: new THREE.Uniform(texture),
      uColor: new THREE.Uniform(color),
      uProgress: new THREE.Uniform(0),
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const firework = new THREE.Points(geometry, material);
  firework.position.copy(position);

  //   scene.add(firework);

  scene.add(firework);

  const destroy = () => {
    scene.remove(firework);
    firework.geometry.dispose();
    firework.material.dispose();
  };

  gsap.to(material.uniforms.uProgress, {
    value: 1,
    duration: 3,
    ease: "linear",
    onComplete: destroy,
  });
};

const createRandomFirework = (scene) => {
  const count = Math.round(400 + Math.random() * 1000);

  const position = new THREE.Vector3(
    (Math.random() - 0.5) * 2,
    Math.random(),
    (Math.random() - 0.5) * 2,
  );
  const size = 0.1 + Math.random() * 0.1;
  const texture =
    fireworkTextures[Math.floor(Math.random() * fireworkTextures.length)];
  const radius = 0.5 + Math.random();
  const color = new THREE.Color();
  color.setHSL(Math.random(), 1, 0.7);

  createFirework(scene, count, position, size, texture, radius, color);
};

export default createRandomFirework;
