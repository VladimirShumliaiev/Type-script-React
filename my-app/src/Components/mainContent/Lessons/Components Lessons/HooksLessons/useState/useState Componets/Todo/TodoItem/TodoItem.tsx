import React, {FC} from 'react';
import style from './TodoItem.module.css'
import onClickButton from '../../../../../../../../../assets/img/delete-svgrepo-com.svg'

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {id, removeTodo, toggleTodo, completed, title} = props


    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            {title}
            <button className={style.todoItem} onClick={() => removeTodo(id)}>
                <img src={onClickButton} alt=''/>
            </button>
        </div>
    );
};

export default TodoItem;