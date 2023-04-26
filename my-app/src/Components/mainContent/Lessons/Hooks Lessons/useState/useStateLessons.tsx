import React, {FC, useState} from 'react';
import Todo from "./useStateLessonsComponnets/todo/Todo";


const initialState = 0

const UseStateLessons: FC = () => {
    const [count, setCount] = useState(initialState)

    const handlerPlus = () => {
        setCount(count + 1)
    }

    const handlerMinus = () => {
        setCount(prev => prev - 1)
    }

    const handlerReset = () => {
        setCount(initialState)
    }
    return (
        <div>
            <h3>first example:</h3>
            Counter: {count}
            <li>
                <button onClick={handlerMinus}>- Minus </button>
                {' '}
                <button onClick={handlerReset}> reset</button>
                {' '}
                <button onClick={handlerPlus}> Plus+</button>

            </li>

            <h3>second example:</h3>

            <Todo/>
        </div>
    );
};

export default UseStateLessons;