import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";

let instance = null;

export default class Experience {
  resize() {
    this.camera.resize();
  }

  update() {
    // console.log("update The Experience");
    this.renderer.update();
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
    this.scene = new THREE.Scene();

    this.sizes = new Sizes(this.canvas);
    this.time = new Time();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on("resize", () => this.resize());

    this.time.on("tick", () => this.update());
  }
}
