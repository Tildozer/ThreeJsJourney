uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uRepetitions;
uniform vec3 uDirection;

uniform float uLow;
uniform float uHigh;
uniform vec3 UPointColor;

varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/ambientLight.glsl
#include ../includes/directionalLight.glsl
#include ../includes/halftone.glsl


void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = uColor;

    vec3 light = vec3(0.0);

    light += ambientLight(
        vec3(1.0),
        1.0
    );

    light += directionalLight(
        vec3(1.0),
        1.0,
        normal,
        vec3(1.0, 1.0, 0.0),
        viewDirection,
        1.0
    );

    color *= light;

    color = halftone(
        color, 
        uRepetitions, 
        uDirection, 
        uLow, 
        uHigh, 
        UPointColor, 
        normal
    );

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}