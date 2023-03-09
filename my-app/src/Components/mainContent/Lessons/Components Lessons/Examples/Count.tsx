import React, {FC} from 'react';

type CountProps = {
    count: number
    setCount: (count: number) => void
}

const Count: FC<CountProps> = ({count, setCount}) => {
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h3>
                {count}
            </h3>
            <button onClick={minus}>- Minus</button>
            <button onClick={plus}> Plus +</button>
        </div>
    );
};

export default Count;