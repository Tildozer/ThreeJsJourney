uniform float uTime;
uniform float uPixelRatio;
uniform float uPointSize;

attribute float aScale;


void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;
    vec4 viewPosition = vec4(viewMatrix * modelPosition);
    gl_Position = vec4(projectionMatrix * viewPosition);
    
    gl_PointSize = uPointSize * aScale * uPixelRatio;
    gl_PointSize *= (1.0 / - viewPosition.z);

}