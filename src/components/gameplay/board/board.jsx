import React, { useState } from "react";

import Tile from "../tile/tile";
import "./board.css";

const Board = () => {
  const rows = 10;
  const cols = 10;
  const [board, setBoard] = useState(createBoard());

  function tileClicked(row, col) {
    console.log(row, col);
    const newBoard = board.slice();
    newBoard[row][col].revealed = true;
    setBoard(newBoard);
  }

  function createBoard() {
    let tileComponents = [];
    for (let i = 0; i < rows; i++) {
      tileComponents.push([]);
      for (let j = 0; j < cols; j++) {
        tileComponents[i].push({
          row: i,
          col: j,
          key: i * rows + j,
          revealed: false,
          hasMine: false,
          index: i * cols + j,
        });
      }
    }
    return tileComponents;
  }

  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((tile) => {
              return (
                <Tile
                  tileClicked={() => tileClicked(tile.row, tile.col)}
                  row={tile.row}
                  col={tile.col}
                  key={tile.key}
                  revealed={tile.revealed}
                  hasMine={tile.hasMine}
                  index={tile.index}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
