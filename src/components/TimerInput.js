import React, { Component } from 'react';
import '../App.css';

export class TimerInput extends Component {
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