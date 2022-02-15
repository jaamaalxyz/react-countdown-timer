import React from "react";

export const TimerInput = (props) => (
  <div>
    <h3 className="timer-input-h1">React Count Down Timer</h3>
    <label className="timer-input" for="timer-input">
      Input your desired time:{" "}
      <input
        type="number"
        value={props.value}
        onChange={props.handleChange}
        required
      />
    </label>
  </div>
);
