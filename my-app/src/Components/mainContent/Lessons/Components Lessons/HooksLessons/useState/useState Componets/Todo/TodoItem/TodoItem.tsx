import React, {FC} from 'react';
import style from './TodoItem.module.css'

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
            <span className={style.todoItem} onClick={() => removeTodo(id)}>&times;</span>
        </div>
    );
};

export default TodoItem;