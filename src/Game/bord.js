import React from 'react';
import Square from './square'

const Bord = props => {

    const renderSquare = i => <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
    />



    return (
        <div>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Bord;