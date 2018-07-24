import React from 'react';
import { formatNumber } from '../lib/utils';

export const Timer = props => {
    const d = new Date(props.seconds * 1000);
    return (
        <div>
            <h1 className="timer">
                {formatNumber(d.getMinutes(), 2)}:{formatNumber(d.getSeconds(), 2)}
            </h1>
        </div>
    );
};
