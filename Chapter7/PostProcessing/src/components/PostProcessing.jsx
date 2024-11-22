import React, { useRef } from 'react'
import { 
  Bloom,
  DepthOfField,
  EffectComposer, 
  Glitch, 
  Noise, 
  ToneMapping, 
  Vignette
} from "@react-three/postprocessing";
import { ToneMappingMode } from 'postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';
import {Drunk} from '.';
import { useControls } from 'leva';


const PostProcessing = ({children}) => {
  
  const {amplitude, frequency} = useControls('DrunkAmp', 
    {
      amplitude: {value: 0.1, min: 0, max: 1, step: 0.01},
      frequency: {value: 20, min: 0, max: 100, step: 1}
    });
  const drunkEffectRef = useRef();

  return ( 
    <EffectComposer>
      {children}
      {/* <DepthOfField 
        focusDistance={0.025}
        focusLength={0.025}
        bokehScale={6}
      /> */}
      {/* <Bloom 
        // luminanceThreshold={ 0 }
        mipmapBlur
        // intensity={ 0.3 }
      /> */}
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
      <Drunk 
        ref={drunkEffectRef}
        frequency={frequency}
        amplitude={amplitude}
        blendFunction={BlendFunction.DARKEN}
      />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  )
}

export default PostProcessing
