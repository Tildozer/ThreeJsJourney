import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      blocksCount: 10,
      blockSeed: 0,

      startTime: 0,
      endTime: 0,

      // Game phases: ready, playing, end
      phase: "ready",
      start: (unsubscribe) => {
        unsubscribe();
        set(() => ({ phase: "playing", startTime: Date.now() }));
      },
      restart: () => {
        set(({ phase }) => {
          if (phase === "ended" || phase === "playing")
            return { phase: "ready", blockSeed: Math.random() };

          return {};
        });
      },
      end: () => {
        set(({ phase }) => {
          if (phase === "playing")
            return { phase: "ended", endTime: Date.now() };

          return {};
        });
      },
    };
  }),
);
