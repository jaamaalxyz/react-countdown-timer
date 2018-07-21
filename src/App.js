import React, { Component } from 'react';
import './App.css';
import TimerInput from './components/TimerInput';
import Timer from './components/Timer';
import StartButton from './components/StartButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: ''
    }
  }

  render() {
    return (
      <div className="App">
        <TimerInput minutes ={this.state.minutes} />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <StartButton />
      </div>
    );
  }
}

export default App;
