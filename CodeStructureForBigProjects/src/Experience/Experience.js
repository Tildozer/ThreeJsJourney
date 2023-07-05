import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

export default class Experience {
  resize() {}

  update() {
    // console.log("update The Experience");
  }

  constructor() {
    window.experience = this;

    // options
    const canvas = document.querySelector("canvas.webgl");

    this.canvas = canvas;
    this.scene = new THREE.Scene();

    this.sizes = new Sizes(this.canvas);
    this.time = new Time();

    this.sizes.on("resize", () => this.resize());

    this.time.on("tick", () => this.update());
  }
}
