import React from "react";

import Tile from "../tile/tile";
import "./board.css";

const Board = () => {
  const rows = 10;
  const cols = 10;
  function tileClicked(row, col) {
    console.log(row, col);
  }

  function createBoard() {
    let tileComponents = [];
    for (let i = 0; i < rows; i++) {
      tileComponents.push([]);
      for (let j = 0; j < cols; j++) {
        tileComponents[i].push(
          <Tile
            tileClicked={() => tileClicked(i, j)}
            row={i}
            col={j}
            key={i * rows + j}
            revealed={false}
            hasMine={false}
            index={i * cols + j}
          />
        );
      }
    }
    return tileComponents;
  }

  const board = createBoard();

  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((tile) => {
              return <div> {tile} </div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
