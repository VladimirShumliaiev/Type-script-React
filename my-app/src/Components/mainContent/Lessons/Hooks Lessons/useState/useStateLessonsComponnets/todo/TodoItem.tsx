import React, {FC} from 'react';

interface TodoItemProps extends Todos {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem:FC<TodoItemProps> = (props) => {
    const {id, removeTodo, toggleTodo, completed, title} = props
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            {title }
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    );
};

export default TodoItem;