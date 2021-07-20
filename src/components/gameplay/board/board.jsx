import React from 'react';

import Tile from '../tile/tile';
import './board.css'

export default class Board extends React.Component {

    constructor() {
        super();

        this.cols = 10;
        this.rows = 10;

        this.state = {
            tileComponents: this.createBoard(),
        };

        this.tileClicked = this.tileClicked.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    tileClicked(row, col) {
        const updatedTileComponents = [...this.state.tileComponents];
        updatedTileComponents[row][col] = <Tile tileClicked={() => this.tileClicked(row, col)} row={row} col={col} key={row * this.rows + col} revealed={true} hasMine={false} index={row * this.cols + col}/>;
        
        this.setState({
            tileComponents: updatedTileComponents,
        });
    }

    createBoard() {
        let tileComponents = [];
        for (let i = 0; i < this.rows; i++) {
            tileComponents.push([]);
            for (let j = 0; j < this.cols; j++) {
                tileComponents[i].push(<Tile tileClicked={() => this.tileClicked(i, j)} row={i} col={j} key={i * this.rows + j} revealed={false} hasMine={false} index={i * this.cols + j}/>)
            }
        }
        return tileComponents;
    }

    render() {
        return (
            <div className="board">
                { this.state.tileComponents.map((row) => {
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