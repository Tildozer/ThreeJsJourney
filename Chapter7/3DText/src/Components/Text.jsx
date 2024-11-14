import React from 'react'
import { Text3D, Center } from '@react-three/drei'

const Text = () => {
  return (
    <Center>
      <Text3D 
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.75}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Hello World
        <meshMatcapMaterial />
      </Text3D>
    </Center>
  )
}

export default Text
