import React, {useRef} from 'react';
import {useScrollBar} from "./useScrollBar";



const ExampleAllList = ({todos, toggleTodo, removeTodo}) => {
    // const todoWrapper = useRef(null)
    // const hasScroll = todos.length > 3

    // useScrollBar(todoWrapper, hasScroll)

    return (
        // <div style={{marginTop: '1rem', height: hasScroll ? '120px' : "auto", minHeight: '120px' }} ref={todoWrapper}>
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
        // </div>
    );
};

export default ExampleAllList;