import React, { Component } from 'react';

export const StartButton = props => (
    <div>
        <button className="start-btn" disabled={!props.value} onClick={props.startCountDown}>
            Start
        </button>
    </div>
);
