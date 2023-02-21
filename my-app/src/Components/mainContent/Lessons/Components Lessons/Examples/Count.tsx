import React, {FC} from 'react';

type CountProps = {
    count: number
    setCount: (count: number) => void
}

const Count: FC<CountProps> = ({count, setCount}) => {

    const plus = () => {
        setCount(count + 1)
        if (count >= 5) {
            alert('Maximum 5 hp')
            setCount(0)
        }
    }

    const minus = () => {
        setCount(count - 1)
        if (count <= -5) {
            alert('Minimum -5 hp')
            setCount(0)
        }

    }
    return (
        <div>
            Counter: {count} hp
            <div>
                <button onClick={minus}> - minus </button>
                {' '}
                <button onClick={plus}> plus + </button>
            </div>
        </div>
    );
};

export default Count;