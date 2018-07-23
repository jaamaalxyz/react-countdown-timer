import React, { Component } from 'react';
import '../App.css';

export class Timer extends Component {
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