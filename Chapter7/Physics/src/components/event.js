const jump = (box) => {
  const mass = box.current.mass();
  box.current.applyImpulse({ x: 0, y: mass * 5, z: 0 }, true);
  box.current.applyTorqueImpulse(
    {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    },
    true,
  );
};

export const movementEvent = (box) => {
  addEventListener("keypress", (ev) => {
    // ev.preventDefault();
    const { x, y, z } = box.current.translation();
    switch (ev.key) {
      case " ":
        if (y < -0.45) {
          jump(box);
        }
        break;
      case "w":
        // boxRef.current.setTranslation({x: x, y: y, z: z + .1}, true);
        break;
      default:
        break;
    }
  });
};
