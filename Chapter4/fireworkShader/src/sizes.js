import { Vector2 } from "three";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};
sizes.resolution = new Vector2(
  sizes.width * sizes.pixelRatio,
  sizes.height * sizes.pixelRatio,
);

export default sizes;
