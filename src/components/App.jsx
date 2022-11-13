import React from 'react';
import cars from './practice.js';

// CHALLENGE: uncomment the code below and see the car stats rendered

function App(){

    const [honda,tesla] = cars;

    const {
        speedStats: {topSpeed: hondaTopSpeed},
        coloursByPopularity: [hondaTopColour]
    } = honda;

    const {
        speedStats: {topSpeed: teslaTopSpeed},
        coloursByPopularity: [teslaTopColour]
    } = tesla;

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

// process ...

    // const {topSpeed: hondaTopSpeed} = honda.speedStats;
    // const {topSpeed: teslaTopSpeed} = tesla.speedStats;

    // const {coloursByPopularity: hondaColours} = honda;
    // const hondaTopColour = hondaColours[0];
    // const {coloursByPopularity: teslaColours} = tesla;
    // const teslaTopColour = teslaColours[0];