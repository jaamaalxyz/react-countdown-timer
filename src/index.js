import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';

class TimerInput extends Component {
  render() {
    return (
      <div>
        <h3
          className="timer-input-h1"
        >React Count Down Timer</h3>
        <label 
          className="timer-input"
          for="timer-input"
        >Input your desired time: <input 
            type="number" 
            value={this.props.value} 
            onChange={this.props.handleChange} 
            required 
          />
        </label>
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <div>
        <h1
          className="timer"
        >{this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

class StartButton extends Component {
  render() {
    return (
      <div>
        <button 
          className="start-btn"
          disabled={!this.props.value} 
          onClick={this.props.startCountDown}
        >
          Start
        </button>
      </div>

    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '25',
      isClicked : false
    }
    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked : true
    })
  }

  render() {
    const clicked = this.state.isClicked;

    if(clicked){
      return (
        <div className="App">
          <Timer 
            value={this.state.value} 
            seconds={this.state.seconds} 
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <TimerInput 
            value={this.state.value} 
            handleChange={this.handleChange} 
          />
          <Timer 
            value={this.state.value} 
            seconds={this.state.seconds} 
          />
          <StartButton 
            startCountDown={this.startCountDown} 
            value={this.state.value} 
          />
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);