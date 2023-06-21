import React, {FC} from 'react';

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
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
            <button onClick={() => removeTodo(id)}>&times;</button>
        </div>
    );
};

export default TodoItem;