import React, { Component } from "react";
import "./App.css";
import { StartButton } from "./components/StartButton";
import { StopButton } from "./components/StopButton";
import { Timer } from "./components/Timer";
import { TimerInput } from "./components/TimerInput";

export class App extends Component {
  // ES7 syntax allow you to define object props
  state = {
    secondsRemaining: 0,
    value: 25,
    isStarted: false,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  tick = () => {
    const secondsRemaining = this.state.secondsRemaining - 1;
    if (secondsRemaining <= 0) {
      clearInterval(this.intervalHandle);
    }
    this.setState({ secondsRemaining });
  };

  startCountDown = () => {
    this.setState(
      {
        secondsRemaining: this.state.value * 60,
        isStarted: true,
      },
      () => {
        this.intervalHandle = setInterval(this.tick, 1000);
      }
    );
  };

  render() {
    const { isStarted, value, secondsRemaining } = this.state;

    if (isStarted) {
      return (
        <div className="App">
          <Timer seconds={secondsRemaining} />
          <StopButton />
        </div>
      );
    } else {
      return (
        <div className="App">
          <TimerInput value={value} handleChange={this.handleChange} />
          <Timer seconds={value * 60} />
          <StartButton startCountDown={this.startCountDown} value={value} />
          <div className="footer">
            <h2>
              Build with <span className="heart">&#x2764;</span> by{" "}
              <a href="https://jaamaal95.github.io/">Md. Jamal Uddin</a>
            </h2>
          </div>
        </div>
      );
    }
  }
}
