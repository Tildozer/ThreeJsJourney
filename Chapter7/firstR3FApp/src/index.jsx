import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Components";
import {
  ACESFilmicToneMapping,
  CineonToneMapping,
  SRGBColorSpace,
} from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // orthographic
    // flat
    gl={
      {
        // antialias: false //DEFAULT
        // outputColorSpace: SRGBColorSpace, //DEFAULT
        // toneMapping: ACESFilmicToneMapping //DEFAULT
      }
    }
    camera={{
      // fov: 45,
      // zoom: 100,
      near: 0.1,
      far: 100,
      position: [3, 2, 6],
    }}
    // dpr={[1, 2]}
  >
    <Experience />
  </Canvas>,
);
