import React, { useRef, useState } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { movementEvent } from "./event";

const Box = () => {
  const [hitSound] = useState(() => new Audio("./hit.mp3"))
  const boxRef = useRef();

  const collisionEnter = () => {
    // hitSound.currentTime = 0;
    // hitSound.volume = Math.random();
    // hitSound.play();
  }
  
  useState(() => {

   movementEvent(boxRef);
  }, [])

  return (
    <RigidBody
      ref={boxRef}
      position={[0.5, 2, 0]}
      // restitution={0.5}
      friction={0}
      colliders={false}
      onCollisionEnter={collisionEnter}
      // onCollisionExit={() => console.log("exit")}
      // onSleep={() => console.log("sleep")}
      // onWake={() => console.log("wake")}
    >
      <CuboidCollider args={[0.5, 0.5, 0.5]} mass={2} />
      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
};

export default Box;
