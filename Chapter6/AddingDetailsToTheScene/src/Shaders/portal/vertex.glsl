varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = vec4(viewMatrix * modelPosition);
    gl_Position = vec4(projectionMatrix * viewPosition);

    vUv = uv;
}