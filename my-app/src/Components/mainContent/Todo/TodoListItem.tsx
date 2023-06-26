import React, {FC} from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {removeTodo, toggleTodo} from "../../../redux/Slices/todoSlice";
import iconButtonDel from '../../../assets/img/delete-svgrepo-com.svg'
import style from './Todo.module.css'

type TodoListItemProps = {
    id: string
    title: string
    completed: boolean
}

const TodoListItem: FC<TodoListItemProps> = (props) => {
    const {id, completed, title} = props
    const dispatch = useAppDispatch()

    const handleRemoveTodo = () => {
        if (window.confirm('delete todo?')) {
            dispatch(removeTodo(id))
        }
    }

    const handleToggleTodo = () => {
        dispatch(toggleTodo(id))
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleToggleTodo}
            />

            {title}

            <span className={style.item} onClick={handleRemoveTodo}>
                    <img src={iconButtonDel} alt=""/>
                </span>
        </div>
    );
};

export default TodoListItem;