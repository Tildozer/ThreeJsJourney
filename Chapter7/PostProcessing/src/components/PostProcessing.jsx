import React from 'react'
import { 
  Bloom,
  EffectComposer, 
  Glitch, 
  Noise, 
  ToneMapping, 
  Vignette 
} from "@react-three/postprocessing";
import { ToneMappingMode } from 'postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';

const PostProcessing = ({children}) => {
  return ( 
    <EffectComposer>
      {children}
      <Bloom 
        luminanceThreshold={ 1.1 }
        mipmapBlur
      />
      {/* <Glitch 
        delay={[0.5, 1.5]} 
        duration={[.2, .4]}
        strength={[0.2, 0.4]}
        mode={GlitchMode.DISABLED}
      /> */}
      {/* <Vignette
        offset={0.3}
        darkness={.9}
        blendFunction={BlendFunction.NORMAL}
          
      /> */}
      {/* <Noise 
        premultiply 
        blendFunction={ BlendFunction.SOFT_LIGHT} 
      /> */}
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  )
}

export default PostProcessing
