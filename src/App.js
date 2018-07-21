import React, { Component } from 'react';
import './App.css';
import TimerInput from './components/TimerInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerInput />
        <Timer />
        <StartButton />
      </div>
    );
  }
}

export default App;
