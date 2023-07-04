export default class Sizes {
  setParams() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    console.log(this);
  }

  constructor(canvas) {
    this.setParams();

    window.addEventListener("resize", () => {
      this.setParams();
    });
  }
}
