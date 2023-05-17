import React from 'react';
import styles from './Square.module.css'

const Square = ({value, onSquareClick}) => {



    return (
        <button onClick={onSquareClick}>
            <table  className={styles.item}><h1>{value}</h1></table>
        </button>
    );
};

export default Square;