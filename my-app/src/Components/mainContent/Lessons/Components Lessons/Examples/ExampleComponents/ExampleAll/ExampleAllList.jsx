import React from 'react';

const ExampleAllList = ({todos, toggleTodo, removeTodo}) => {

    return (
        <div>
            {todos.map(e => (
                <div key={e.id}>
                    <input
                        type="checkbox"
                        checked={e.completed}
                        onChange={() => toggleTodo(e.id)}
                    />
                    {e.title}
                    <button onClick={() => removeTodo(e.id)}>x</button>
                </div>
            ))}
        </div>
    );
};

export default ExampleAllList;