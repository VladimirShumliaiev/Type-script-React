import React, {FC} from 'react';

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {id, removeTodo, toggleTodo, title, completed} = props
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            {title}
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    );
};

export default TodoItem;