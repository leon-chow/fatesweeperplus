import React from 'react';

import './tile.css';

export default function Tile(props, key) {
    return (
        <div className="tile" key={key}> {props.index} </div>
    )
}