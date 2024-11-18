import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Cube, Floor, Hamburger, Sphere } from "./components";

export default function Experience() {
  const cube = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <color attach="background" args={["#000000"]} />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Sphere />
      <Cube cube={cube} />
      <Hamburger />
      <Floor />
    </>
  );
}
