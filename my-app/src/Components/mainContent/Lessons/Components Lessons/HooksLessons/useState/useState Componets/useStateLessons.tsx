import React, {useState} from 'react';
import Todo from "./Todo/Todo";




const UseStateLessons = () => {
    const [count, setCount] = useState(0)

    const handleMinus = () => {
        setCount(count - 1)

        if (count <= -5) {
                if (window.confirm('Minimum -5 reset?')){
                    return setCount(0)
                } else {
                    return setCount(count)
                }
        }

    }

    const handlePlus = () => {
        setCount(count + 1)

        if (count > 5) {
            if(window.confirm('Maximum 5')){
                return setCount(0)
            } else {
                return setCount(count)
            }
        }
    }

    const handleReset = () => {
        setCount(0)
    }



    return (
        <div>
            <h3>first example:</h3>
            <div>
                <h3>
                    {count}
                </h3>
            </div>
            <button onClick={handleMinus}>-Minus</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePlus}>Plus+</button>
            <hr/>
            <h3>second example:</h3>
            <Todo/>
        </div>
    );
};

export default UseStateLessons;