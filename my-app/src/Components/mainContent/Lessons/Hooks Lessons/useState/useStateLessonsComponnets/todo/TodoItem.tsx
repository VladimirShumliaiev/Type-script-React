import React, {FC} from 'react';

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem:FC<TodoItemProps> = ({id, removeTodo, toggleTodo, completed, title}) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            {title}
            <button onClick={() => removeTodo(id)}>delete</button>
        </div>
    );
};

export default TodoItem;