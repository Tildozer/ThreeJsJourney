varying vec2 vUv;



void main()
{
    // float strength = vUv.y;
    // float strength = vUv.x;
    float strength = 1.0 - vUv.y;

    gl_FragColor = vec4(vec3(strength), 1.0);
}