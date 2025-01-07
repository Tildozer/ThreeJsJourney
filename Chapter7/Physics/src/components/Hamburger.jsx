import React from 'react'
import { RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'

const Hamburger = () => {
  const hamburger = useGLTF("./hamburger.glb")
  console.log(hamburger)
  return (
    <RigidBody colliders="cuboid">
        <primitive 
        object={hamburger.scene} 
        scale={.1} 
        position={[3, 1, -3]} 
        >

        </primitive>
    </RigidBody>
  )
}

export default Hamburger
