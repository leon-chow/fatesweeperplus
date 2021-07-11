import React from 'react';

import Tile from '../tile/tile';
import './board.css'

export default class Board extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    createBoard() {
        let tileComponents = [];
        const rows = 10;
        const cols = 10;
        for (let i = 0; i < rows; i++) {
            tileComponents.push([]);
            for (let j = 0; j < cols; j++) {
                tileComponents[i].push(<Tile index={i * 10 + j}/>)
            }
        }
        return tileComponents;
    }

    render() {
        const tileComponents = this.createBoard();
        return (
            <div className="board">
                { tileComponents.map((row) => {
                    return (
                        <div className="row">
                            {row.map((tile) => {
                                return <div> {tile} </div>;
                            })}
                        </div>
                    );
                })}     
            </div> 
        )
    }
}