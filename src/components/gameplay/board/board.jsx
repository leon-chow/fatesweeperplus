import React from 'react';

import Tile from '../tile/tile';

export default class Board extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        /*let tileComponents = [];
        let numOfTiles = 100;
        for (let i = 0; i < numOfTiles; i++) {
            tileComponents.push(<Tile index={i}/>)
        }
        return (
            <div>
                { tileComponents }     
            </div> */
        return (
            <div className="board">
                <Tile/>
            </div>
        );
    }
}