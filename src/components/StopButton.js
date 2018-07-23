import React, { Component } from 'react';
import '../App.css';


export class StopButton extends Component {
  render() {
    return (
      <div>
        <a href="https://react-count-down-timer.herokuapp.com/">
          <button className="stop-btn">
            Stop and Go Back to Home
          </button>
        </a>
      </div>
    );
  }
}