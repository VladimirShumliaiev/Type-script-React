import React, {FC} from 'react';
import style from './TodoItem.module.css'
import deleteTodoImg from '../../../../../../../../../assets/img/delete-svgrepo-com.svg'

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {id, title, completed, toggleTodo, removeTodo} = props
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            {title}
            <button className={style.todoItem} onClick={() => removeTodo(id)}><img src={deleteTodoImg} alt=""/></button>
        </div>
    );
};

export default TodoItem;