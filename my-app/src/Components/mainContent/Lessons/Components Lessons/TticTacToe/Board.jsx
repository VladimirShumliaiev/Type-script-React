import React, {useState} from 'react';
import Square from "./Square/Square";
import styles from './Board.module.css'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        const nextSquares  = squares.slice()
        nextSquares[i] = 'x'
        setSquares(nextSquares)
    }
    return (
        <div className={styles.item}>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    );
};

export default Board;