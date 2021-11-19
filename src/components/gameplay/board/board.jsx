import React, { useState } from "react";

import Tile from "../tile/tile";
import "./board.css";
import { generateMines, createBoard } from "../utilities/board/board-utilities";
import { tileClicked } from "../utilities/game/game-utilities";

const Board = () => {
  const rows = 10;
  const cols = 10;
  const [mines] = useState(generateMines(rows, cols));
  const [board, setBoard] = useState(createBoard(rows, cols, mines));

  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((tile) => {
              return (
                <Tile
                  tileClicked={() =>
                    tileClicked(board, setBoard, tile.row, tile.col)
                  }
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
