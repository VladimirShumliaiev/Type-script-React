import React, {FC, useState} from 'react';
import Todo from "./useStateLessonsComponnets/todo/Todo";


const initialState = 0

const UseStateLessons: FC = () => {
  const [count, setCount] = useState(initialState)
    const minusHandler = () => {
        setCount(count - 1)
        if (count <= -5) {
            if (window.confirm('Minimum -5 Resets?')){
                setCount(0)
            }
            else return setCount(-5)
        }
    }
    const resetsHandler = () => {
        setCount(0)
    }
    const plusHandler = () => {
        setCount(count + 1)
        if (count >= 5) {
            if (window.confirm('Maximum 5 Resets?')){
                setCount(0)
            }
            else return setCount(5)
        }
    }

    return (
        <div>
            <h3>first example:</h3>
            <h3>
                {count}
            </h3>
            <button onClick={minusHandler}>- Minus</button>
            <button onClick={resetsHandler}>Resets</button>
            <button onClick={plusHandler}>Plus +</button>

            <h3>second example:</h3>
            <Todo/>
        </div>
    );
};

export default UseStateLessons;