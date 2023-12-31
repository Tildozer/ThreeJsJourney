import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Resources from "./Utils/Resources";
import sources from "./sources";
import Debug from "./Utils/Debug";

let instance = null;

export default class Experience {
  resize() {
    this.camera.resize();
  }

  destroy() {
    this.sizes.off("resize");
    this.time.off("tick");

    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        for (const key in child.material) {
          const vaule = child.material[key];
          if (vaule && typeof vaule.dispose === "function") {
            vaule.dispose();
          }
        }
      }

      this.camera.controls.dispose();
      this.renderer.intstance.dispose();

      if (this.debug.active) {
        this.debug.ui.destroy();
      }
    });
  }

  update() {
    // console.log("update The Experience");
    this.renderer.update();
    this.world.update();
    this.camera.update();
  }

  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;
    window.experience = this;

    // options
    this.canvas = canvas;

    this.debug = new Debug();
    this.sizes = new Sizes(this.canvas);
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on("resize", () => this.resize());

    this.time.on("tick", () => this.update());
  }
}
