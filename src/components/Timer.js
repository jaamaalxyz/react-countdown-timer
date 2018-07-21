import React from 'react';

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft:100 }}>{this.props.minutes}:{this.props.seconds}</h1>
      </div>
    );
  }
}

export default Timer;