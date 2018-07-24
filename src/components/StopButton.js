import '../App.css';

import React, { Component } from 'react';

export class StopButton extends Component {
    clickHandler = ev => {
        ev.preventDefault();
        window.location.href = 'https://react-count-down-timer.herokuapp.com/';
    };

    render() {
        return (
            <div>
                <button className="stop-btn" onClick={this.clickHandler}>
                    Stop and Go Back to Home
                </button>
            </div>
        );
    }
}
