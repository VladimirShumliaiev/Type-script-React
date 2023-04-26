import React, {ChangeEvent, useState} from 'react';

const Todo = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
            <button onClick={() => console.log(value)}>+</button>
        </div>
    );
};

export default Todo;