import React, {FC} from 'react';

type CountProps = {
    count: number
    setCount: (count: number) => void
}

const Count: FC<CountProps> = ({count, setCount}) => {
    const plus = () => {
        setCount(count + 1)
        if (count >= 5) {
            alert('Maximum 5')
            setCount(0)
        }
    }
    const minus = () => {
        setCount(count - 1)
        if (count <= -5) {
            alert('Minimum -5')
            setCount(0)
        }
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