import React from 'react';
import cars from './practice.js';

// CHALLENGE: uncomment the code below and see the car stats rendered

function App(){

    const [honda,tesla] = cars;

    const {hondaTopSpeed} = honda.speedStats.topSpeed;
    const {teslaTopSpeed} = tesla.speedStats.topSpeed;

    const {hondaTopColour} = honda.hondaTopColour[0];
    const {teslaTopColour} = tesla.teslaTopColour[0];

    return(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>
    );
}

export default App;