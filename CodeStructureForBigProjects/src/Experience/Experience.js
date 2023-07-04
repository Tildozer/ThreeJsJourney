import Sizes from "./Utils/Sizes";

export default class Experience {
  constructor() {
    window.experience = this;

    // options
    const canvas = document.querySelector("canvas.webgl");

    this.canvas = canvas;
    // console.log(this.canvas);

    this.sizes = new Sizes(this.canvas);
  }
}
