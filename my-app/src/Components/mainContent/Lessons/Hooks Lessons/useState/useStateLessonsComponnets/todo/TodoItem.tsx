import React, {FC} from 'react';
import style from './Todo.module.css'

type TodoItemProps = {
    id: number,
    title: string,
    completed: boolean,
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = ({title, completed, id , removeTodo, toggleTodo}) => {
    return (
        <div className={style.todoItem}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            {title}
            <button className={style.item} onClick={() => removeTodo(id)}>x</button>
        </div>
    );
};

export default TodoItem;