import React, {FC} from 'react';
import style from './TodoItem.module.css'
import buttonImg from '../../../../../../../../../assets/img/delete-svgrepo-com.svg'

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}


const TodoItem: FC<TodoItemProps> = ({id, removeTodo, toggleTodo, completed, title}) => {

    return (
        <div>
            <input className={style.todoItem} type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            {title}
            <button className={style.todoItem} onClick={() => removeTodo(id)}><img src={buttonImg} alt=""/></button>
        </div>
    );
};

export default TodoItem;