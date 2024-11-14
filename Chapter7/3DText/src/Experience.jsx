import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {Box, Text} from './Components/'

export default function Experience()
{
    return (
      <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        
        {/* <Box /> */}
        <Text />
      </>
    )
}