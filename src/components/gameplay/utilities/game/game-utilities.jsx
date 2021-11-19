export const tileClicked = (board, setBoard, row, col) => {
  if (board[row][col].hasMine) {
    window.location.reload();
  }
  const newBoard = board.slice();
  newBoard[row][col].revealed = true;
  console.log(row, col);
  checkAdjacentTiles(newBoard, setBoard, row, col);
};

// TODO: Add function
export const checkAdjacentTiles = (newBoard, setBoard, row, col) => {
  try {
    upCheck(newBoard, row, col);
    rightCheck(newBoard, row, col);
    leftCheck(newBoard, row, col);
    downCheck(newBoard, row, col);
  } catch {}
  setBoard(newBoard);
};

const upCheck = (newBoard, row, col) => {
  if (newBoard[row - 1][col] && !newBoard[row - 1][col].hasMine) {
    newBoard[row - 1][col].revealed = true;
    upCheck(newBoard, row - 1, col);
  }
};

const rightCheck = (newBoard, row, col) => {
  if (newBoard[row][col + 1] && !newBoard[row][col + 1].hasMine) {
    newBoard[row][col + 1].revealed = true;
    rightCheck(newBoard, row, col + 1);
  }
};

const downCheck = (newBoard, row, col) => {
  if (newBoard[row - 1][col] && !newBoard[row - 1][col].hasMine) {
    newBoard[row - 1][col].revealed = true;
    downCheck(newBoard, row + 1, col);
  }
};

const leftCheck = (newBoard, row, col) => {
  if (newBoard[row][col - 1] && !newBoard[row][col - 1].hasMine) {
    newBoard[row][col - 1].revealed = true;
    leftCheck(newBoard, row, col - 1);
  }
};
