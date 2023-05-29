import React, {useState} from 'react';
import Todo from "./Todo/Todo";


const initialState = 0

const UseStateLessons = () => {
    const [count, setCount] = useState(initialState)

    const minusHandle = () => {
        setCount(count - 1)
        if (count <= -5) {
            alert('Minimum -5')
            if (window.confirm('Reset?')) {
                setCount(0)
            } else return setCount(count)
        }
    }
    const resetHandle = () => {
        setCount(0)
    }
    const plusHandle = () => {
        setCount(count + 1)
        if (count >= 5) {
            alert('Maximum 5')
            if (window.confirm('Reset?')) {
                setCount(0)
            } else return setCount(count)

        }
    }
    return (
        <div>
            <h3>first example:</h3>
            <div>
                <h3>
                    {count}
                </h3>
            </div>
            <button onClick={minusHandle}>-Minus</button>
            <button onClick={resetHandle}>Reset</button>
            <button onClick={plusHandle}>Plus+</button>
            <hr/>
            <h3>second example:</h3>
            <Todo/>
        </div>
    );
};

export default UseStateLessons;