import React from 'react';

const ExampleAllInput = ({title, setTitle, addTodo}) => {

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder={'add task'}
            />
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default ExampleAllInput;