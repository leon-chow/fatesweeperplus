import React from "react";

import "./tile.css";

export const Tile = (props) => {
  const revealed = props.revealed ? "revealed" : "";
  const hasMine = props.hasMine ? "mine" : "";
  const classes = `tile ${revealed} ${hasMine}`;
  return (
    <div
      onClick={() => props.tileClicked(props.row, props.col)}
      className={classes}
    ></div>
  );
};

export default Tile;
