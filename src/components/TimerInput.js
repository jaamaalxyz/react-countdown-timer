import React from 'react';

class TimerInput extends React.Component {
  render() {
    return (
      <div style={{marginLeft:100}}>
        <h3>Input your desired time</h3>
        <input type="number" minutes={this.props.minutes} handleChange={this.props.handleChange} required />
      </div>
    );
  }
}

export default TimerInput;