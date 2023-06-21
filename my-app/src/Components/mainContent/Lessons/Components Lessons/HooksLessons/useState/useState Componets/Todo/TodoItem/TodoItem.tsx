import React, {FC} from 'react';
import style from './TodoItem.module.css'

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    setShowModal: (e: boolean) => void
    toggleTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {id, toggleTodo, title, completed, setShowModal} = props
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            {title}
            <button className={style.todoItem} onClick={() => setShowModal(true)}>[X]</button>
        </div>
    );
};

export default TodoItem;