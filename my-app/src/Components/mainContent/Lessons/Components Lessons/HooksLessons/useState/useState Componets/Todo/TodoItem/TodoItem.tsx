import React, {FC} from 'react';
import style from './TodoItem.module.css'
import Modal from "../Modal/Modal";

type TodoItemProps = {
    id: number
    title: string
    completed: boolean
    showModal: boolean
    removeTodo: (id: number) => void
    setShowModal: (e: boolean) => void
    toggleTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {id, toggleTodo, title, completed, setShowModal, showModal, removeTodo} = props

    const closeModal = () => {
        setShowModal(false)
    }

    const handleDeleteTodo = () => {
        setShowModal(false)
        removeTodo(id)
    }


    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            {title}
            <button className={style.todoItem} onClick={() => setShowModal(true)}>[X]</button>
            {showModal && (<Modal id={id}  handleDeleteTodo={handleDeleteTodo} closeModal={closeModal}/>)}
        </div>
    );
};

export default TodoItem;