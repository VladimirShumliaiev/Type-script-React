import React, {useState} from 'react';

const UseStateLessons = () => {
    const [count, setCount] = useState(0)

    const handlerPlus = () => {
        setCount(count + 1)
    }

    const handlerMinus = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h3>first example:</h3>
            Counter: {count}
            <li>
                <button onClick={handlerMinus}>- Minus</button>
                <button onClick={handlerPlus}> Plus+</button>
            </li>

            <h3>second example:</h3>

        </div>
    );
};

export default UseStateLessons;