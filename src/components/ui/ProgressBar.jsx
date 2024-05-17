import React from 'react';
import { Progress } from '../shadcn/Progress';

export default function ProgressBar({ color, strength }) {
    let width;

    switch (strength) {
        case 'Weak':
            width = 33;
            break;
        case 'Medium':
            width = 66;
            break;
        case 'Strong':
            width = 100;
            break;
        default:
            width = 10;
    }
console.log(strength);
  
    return (
        <Progress
            value={width}
            indicatorColor= {color} />
    );
}

