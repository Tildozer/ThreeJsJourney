import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Interface } from "./components";
import { MaterialsProvider } from "./MaterialsContext.jsx";
import { GeometriesProvider } from "./GeometriesContext.jsx";
import { KeyboardControls } from "@react-three/drei";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <KeyboardControls
    map={[
      { name: "forward", keys: ["KeyW", "ArrowUp"] },
      { name: "backward", keys: ["KeyS", "ArrowDown"] },
      { name: "leftward", keys: ["KeyA", "ArrowLeft"] },
      { name: "rightward", keys: ["KeyD", "ArrowRight"] },
      { name: "jump", keys: ["Space"] },
    ]}
  >
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6],
      }}
    >
      {/* <color attach="background" args={["#87CEEB"]} /> */}
      <GeometriesProvider>
        <MaterialsProvider>
          <Experience />
        </MaterialsProvider>
      </GeometriesProvider>
    </Canvas>
    <Interface />
  </KeyboardControls>,
);
