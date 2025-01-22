import { useKeyboardControls } from "@react-three/drei";
import React, { useState } from "react";

const Interface = () => {
  const [time, setTime] = useState(0.0);

  const reset = (ev) => {
    ev.preventDefault();
    setTime(0.0);
  };

  const [forward, backward, leftward, rightward, jump] = [
    useKeyboardControls((state) => state.forward),
    useKeyboardControls((state) => state.backward),
    useKeyboardControls((state) => state.leftward),
    useKeyboardControls((state) => state.rightward),
    useKeyboardControls((state) => state.jump),
  ];

  const makeRow = (keys, large = false) => {
    return keys.map((key) => {
      return (
        <div
          className={`key ${large ? "large" : ""} ${key ? "active" : ""}`}
        ></div>
      );
    });
  };

  return (
    <div className="interface">
      <div className="time">0.00</div>

      <button className="restart">RESTART</button>

      <div className="controls">
        <div className="raw">{makeRow([forward])}</div>
        <div className="raw">{makeRow([leftward, rightward, backward])}</div>
        <div className="raw">{makeRow([jump], true)}</div>
      </div>
    </div>
  );
};

export default Interface;
