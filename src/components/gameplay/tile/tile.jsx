import React from 'react';

import './tile.css';

export default function Tile(props) {
    return (
        <div onClick={() => props.tileClicked(props.row, props.col)} className={props.revealed === true ? 'tile revealed' : 'tile'}> {props.index} </div>
    );
}