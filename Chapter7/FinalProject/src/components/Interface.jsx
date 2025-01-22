import { useKeyboardControls } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import useGame from "../stores/useGame";
import { addEffect } from "@react-three/fiber";

const Interface = () => {
  const time = useRef();

  const [phase, restart] = [
    useGame((state) => state.phase),
    useGame((state) => state.restart),
  ];

  const reset = (ev) => {
    ev.preventDefault();
    restart();
  };

  const [forward, backward, leftward, rightward, jump] = [
    useKeyboardControls((state) => state.forward),
    useKeyboardControls((state) => state.backward),
    useKeyboardControls((state) => state.leftward),
    useKeyboardControls((state) => state.rightward),
    useKeyboardControls((state) => state.jump),
  ];

  const makeRow = (keys, large = false) => {
    return keys.map((key, idx) => {
      return (
        <div
          key={idx}
          className={`key ${large ? "large" : ""} ${key ? "active" : ""}`}
        ></div>
      );
    });
  };

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      }

      if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }

      if (time.current) {
        time.current.innerText = (elapsedTime / 1000).toFixed(2);
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  return (
    <div className="interface">
      <div ref={time} className="time">
        0.00
      </div>

      {phase === "ended" && (
        <button onClick={(ev) => reset(ev)} className="restart">
          RESTART
        </button>
      )}

      <div className="controls">
        <div className="raw">{makeRow([forward])}</div>
        <div className="raw">{makeRow([leftward, backward, rightward])}</div>
        <div className="raw">{makeRow([jump], true)}</div>
      </div>
    </div>
  );
};

export default Interface;
