import * as THREE from "three";
import Experience from "./Experience";

export default class Renderer {
  setInstance() {
    this.intstance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.intstance.useLegacyLights = false;
    this.intstance.toneMapping = THREE.CineonToneMapping;
    this.intstance.toneMappingExposure = 1.75;
    this.intstance.shadowMap.enabled = true;
    this.intstance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.intstance.setClearColor("#211d20");
    this.resize();
  }

  resize() {
    this.intstance.setSize(this.sizes.width, this.sizes.height);
    this.intstance.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.resize();
    this.intstance.render(this.scene, this.camera.instance);
  }

  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.setInstance();
  }
}
