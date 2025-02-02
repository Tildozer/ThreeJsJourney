uniform vec3 uColor;
uniform vec3 uDirLightPos;
uniform float uSpecularPower;
uniform vec3 uLightColor;
uniform float uLightIntensity;

varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/ambientLight.glsl
#include ../includes/directionalLight.glsl
#include ../includes/pointLight.glsl


void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 color = uColor;

  vec3 light = vec3(0.0);

  light += ambientLight(
    vec3(1.0),  // color
    0.03        // intensity
  );

  light +=  directionalLight(
    uLightColor,        // color
    uLightIntensity,    // intensity
    normal,             // normal
    uDirLightPos,       // lightPosition
    viewDirection,      // viewDirection
    uSpecularPower      // specularPower
  );

  light += pointLight(
    vec3(1.0, 0.1, 0.1),  // color
    uLightIntensity,      // intensity
    normal,               // normal
    vec3(0.0, 2.5, 0.0),  // lightPosition
    viewDirection,        // viewDirection
    uSpecularPower,       // specularPower
    vPosition,            // position
    0.25
  );


  color *= light;

// Final color
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}