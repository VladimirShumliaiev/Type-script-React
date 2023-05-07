import React, {FC} from 'react';
import buttonHandler from '../../../../../../../../../assets/img/delete-svgrepo-com.svg'
import style from './TodoItem.module.css'

type TodoItemProps = {
    id: number,
    title: string,
    completed: boolean,
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
}

const TodoItem: FC<TodoItemProps> = ({id, removeTodo, toggleTodo, completed, title}) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            {title}
            <button className={style.todoItem} onClick={() => removeTodo(id)}><img src={buttonHandler} alt=""/></button>
        </div>
    );
};

export default TodoItem;