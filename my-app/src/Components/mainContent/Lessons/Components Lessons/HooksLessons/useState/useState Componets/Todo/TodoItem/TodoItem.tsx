import React, {FC} from 'react';
import styles from './TodoItem.module.css'
import buttonImg from '../../../../../../../../../assets/img/delete-svgrepo-com.svg'

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
            <input type="checkbox"
                   checked={completed}
                   onChange={() => toggleTodo(id)}
            />
            {title}
            <button className={styles.todoItem}
                    onClick={() => removeTodo(id)}><img src={buttonImg} alt=""/></button>
        </div>
    );
};

export default TodoItem;