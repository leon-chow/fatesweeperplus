export const createBoard = (rows, cols, mines) => {
  let tileComponents = [];
  for (let i = 0; i < rows; i++) {
    tileComponents.push([]);
    for (let j = 0; j < cols; j++) {
      tileComponents[i].push({
        row: i,
        col: j,
        key: i * rows + j,
        revealed: false,
        hasMine: mines.includes(i * rows + j),
        index: i * cols + j,
      });
    }
  }
  return tileComponents;
};

export const generateMines = (rows, cols) => {
  const indices = [];
  let mineLocations = [];
  for (let i = 0; i < rows * cols; i++) {
    indices[i] = i;
  }
  for (let i = 0; i < rows; i++) {
    const random = Math.floor(Math.random() * rows * cols);
    if (!mineLocations.includes(random)) {
      mineLocations.push(random);
    } else {
      i--;
    }
  }
  return mineLocations;
};

export const tileClicked = (board, setBoard, row, col) => {
  if (board[row][col].hasMine) {
    window.location.reload();
  }
  const newBoard = board.slice();
  newBoard[row][col].revealed = true;
  setBoard(newBoard);
};

// TODO: Add function
export const checkAdjacentTiles = (board, setBoard, row, col) => {};
