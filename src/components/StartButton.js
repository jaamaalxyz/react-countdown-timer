import React, { Component } from 'react';
import '../App.css';

export class StartButton extends Component {
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