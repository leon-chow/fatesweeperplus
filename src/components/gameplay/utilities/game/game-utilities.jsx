export const tileClicked = (board, setBoard, row, col) => {
  if (board[row][col].hasMine) {
    window.location.reload();
  }
  const newBoard = board.slice();
  newBoard[row][col].revealed = true;
  checkAdjacentTiles(newBoard, setBoard, row, col);
};

// TODO: Add function
export const checkAdjacentTiles = (newBoard, setBoard, row, col) => {
  if (!adjacentTilesHelper(newBoard, row, col)) {
    setBoard(newBoard);
  }
};

const adjacentTilesHelper = (newBoard, row, col) => {
  upCheck(newBoard, row, col);
  rightCheck(newBoard, row, col);
  downCheck(newBoard, row, col);
  leftCheck(newBoard, row, col);
};

const upCheck = (newBoard, row, col) => {};

const rightCheck = (newBoard, row, col) => {};

const downCheck = (newBoard, row, col) => {};

const leftCheck = (newBoard, row, col) => {};
