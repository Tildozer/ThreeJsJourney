export const movePlayer = (
  { forward, rightward, backward, leftward },
  body,
  delta,
) => {
  const impulse = { x: 0, y: 0, z: 0 },
    impulseStrength = 0.6 * delta;

  const torque = { x: 0, y: 0, z: 0 },
    torqueStrength = 0.2 * delta;

  if (forward) {
    impulse.z -= impulseStrength;
    torque.x -= torqueStrength;
  }

  if (rightward) {
    impulse.x += impulseStrength;
    torque.z -= torqueStrength;
  }

  if (backward) {
    impulse.z += impulseStrength;
    torque.x += torqueStrength;
  }

  if (leftward) {
    impulse.x -= impulseStrength;
    torque.z += torqueStrength;
  }

  body.current.applyImpulse(impulse);
  body.current.applyTorqueImpulse(torque);
};

export const jump = (body, Ray, world) => {
  const origin = body.current.translation();
  origin.y -= 0.31;
  const direction = { x: 0, y: -1, z: 0 };

  const ray = new Ray(origin, direction);
  const hit = world.castRay(ray, 10, true);

  if (hit.timeOfImpact < 0.15)
    body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
};
