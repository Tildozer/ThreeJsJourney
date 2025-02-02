import * as THREE from "three";
import shadingVertexShader from "./shaders/shading/vertex.glsl";
import shadingFragmentShader from "./shaders/shading/fragment.glsl";
import { directionalLightParameters } from "./customLights";

export const materialParameters = {
  color: "#ffffff",
};

const { color: lightColor, intensity, position } = directionalLightParameters;

export const material = new THREE.ShaderMaterial({
  vertexShader: shadingVertexShader,
  fragmentShader: shadingFragmentShader,
  uniforms: {
    uColor: new THREE.Uniform(new THREE.Color(materialParameters.color)),
    uDirLightPos: new THREE.Uniform(new THREE.Vector3().fromArray(position)),
    uSpecularPower: new THREE.Uniform(20),
    uLightColor: new THREE.Uniform(new THREE.Color(lightColor)),
    uLightIntensity: new THREE.Uniform(intensity),
  },
});
