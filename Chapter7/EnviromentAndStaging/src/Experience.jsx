import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  BakeShadows,
  // SoftShadows,
  // AccumulativeShadows,
  // RandomizedLight,
  ContactShadows,
  // Sky,
  Stage,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import { Cube, Environment, Floor, Sphere } from "./Components";
import * as THREE from "three";
import { useControls } from "leva";

export default function Experience() {
  const cube = useRef();
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  useFrame((state, delta) => {
    // const time = state.clock.getElapsedTime();
    // cube.current.position.x = 2 + Math.sin(time);
    cube.current.rotation.y += delta * 0.2;
  });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1dBf75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  // const {sunPosition} = useControls("Sky", {
  //   sunPosition: {value: [1, 2, 3], step: 0.1} , // not the normal way to set the sun position use spherical coordinates instead
  // });

  const envMapSettings = useControls("Environment", {
    envMapIntensity: { value: 1, min: 0, max: 12 },
    envMapHeight: { value: 7, min: 0, max: 100 },
    envMapRadius: { value: 28, min: 10, max: 1000 },
    envMapScale: { value: 100, min: 10, max: 1000 },
  });

  return (
    <>
      {/* <Environment envMapSettings={envMapSettings} /> */}

      {/* <BakeShadows /> */}
      {/* <SoftShadows 
        frustum={3.75} // 
        size={50} //
        near={9.5} //
        samples={17} //
        rings={11} //
      /> */}
      {/* <color args={[ "ivory" ]} attach="background" /> */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color={0x316d39}
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}

      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows 
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1} // bakes in shadows
      /> */}

      {/* <directionalLight 
        ref={directionalLight} 
        position={sunPosition} 
        castShadow 
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={10}
        shadow-camera-near={1}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} /> */}
      {/* <Sky sunPosition={sunPosition}/> */}
      {/* <Floor envMapIntensity={ envMapSettings.envMapIntensity} /> */}
      {/* <Cube cube={cube} envMapIntensity={ envMapSettings.envMapIntensity} /> */}
      {/* <Sphere envMapIntensity={ envMapSettings.envMapIntensity} /> */}

      <Stage
        shadows={{
          type: "contact",
          opacity: opacity,
          color: color,
          blur: blur,
        }}
        environment="sunset"
        preset="portrait"
        intensity={envMapSettings.envMapIntensity}
      >
        <Cube cube={cube} envMapIntensity={envMapSettings.envMapIntensity} />
        <Sphere envMapIntensity={envMapSettings.envMapIntensity} />
      </Stage>
    </>
  );
}
