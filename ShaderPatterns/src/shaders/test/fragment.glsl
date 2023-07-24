varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}



void main()
{
    // pattern 1
    float strength = vUv.y;
    // pattern 2
    // float strength = vUv.x;
    // pattern 3
    // float strength = 1.0 - vUv.y;
    // pattern 4
    // float strength = vUv.y * 10.0;
    // pattern 5
    // float strength = mod(vUv.y * 10.0, 1.0);
    // pattern 6
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.75, strength);
    // same as strength = strength < 0.5 ? 0.0 : 1.0; ... sorta
    // pattern 7
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.75, strength);
    // pattern 8
    // float strength = step(0.75, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.75, mod(vUv.y * 10.0, 1.0));
    // pattern 8
    // float strength = step(0.75, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.75, mod(vUv.y * 10.0, 1.0));
    // pattern 9
    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.75, mod(vUv.y * 10.0, 1.0));
    // pattern 10
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.75, mod(vUv.y * 10.0, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;
    // pattern 11
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.75, mod(vUv.y * 10.0 + 0.2, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;
    // pattern 12
    // float strength = abs(vUv.x - 0.5);
    // pattern 13
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // pattern 14
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // pattern 15
    // float strength = step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // pattern 16
    // float strength = step(0.45, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // pattern 17
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // pattern 18
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // strength *= floor(vUv.y * 10.0) / 10.0;
    // pattern 19
    // float strength = random(vUv);
    // pattern 20
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //      floor(vUv.y * 10.0) / 10.0
    // );

    // float strength = random(gridUv);
    // pattern 21
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //      floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0
    // );

    // float strength = random(gridUv);
    // pattern 22
    // float strength = length(vUv);
    // pattern 23
    // float strength = distance(vUv, vec2(0.5));
    // pattern 24
    // float strength = 1.0 - distance(vUv, vec2(0.5));

    gl_FragColor = vec4(vec3(strength), 1.0);
}