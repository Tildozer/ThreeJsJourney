import react from "react";
import { Environment as Env, Lightformer } from "@react-three/drei";

const Environment = ({ envMapSettings }) => {
  return (
    <Env
      // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
      preset="night"
      ground={{
        height: envMapSettings.envMapHeight,
        radius: envMapSettings.envMapRadius,
        scale: envMapSettings.envMapScale,
      }}
    >
      {/* <color args={['#000000']} attach="background"/> */}
      {/* <Lightformer 
        position-z={ -5 } 
        scale={10} 
        color={"red"} 
        intensity={10}
        form={"ring"}
      /> */}
      {/* <mesh position-z={ -5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color={[10, 0, 0]} />
      </mesh> */}
    </Env>
  );
};

export default Environment;
