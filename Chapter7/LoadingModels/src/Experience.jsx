import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  Floor,
  Sphere,
  Cube,
  Lighting,
  Hamburger,
  FlightHelmet,
  Fox,
} from "./components";
import { Suspense } from "react";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {}, []);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <color attach="background" args={["#000000"]} />

      <Lighting />

      {/* <Sphere /> */}
      <Suspense
        fallback={
          <Cube
            position={{ y: 0.5 }}
            color="red"
            scale={[2, 3, 2]}
            args={[1, 1, 1, 2, 2, 2]}
          />
        }
      >
        <Hamburger scale={0.35} />
        <Fox />
        {/* <FlightHelmet /> */}
      </Suspense>
      <Floor />
    </>
  );
}
