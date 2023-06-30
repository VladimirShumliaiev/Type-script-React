import React, {FC} from 'react';
import {removeTodo, Todo, toggleTodo} from "../../../redux/Slices/todoSlice";
import {useAppDispatch} from "../../../hooks/hooks";
import buttonImg from '../../../assets/img/delete-svgrepo-com.svg'
import style from './Todo.module.css'

const TodoListItem: FC<Todo> = (props) => {
    const {id, completed, title} = props
    const dispatch = useAppDispatch()

    const handleToggle = () => {
        dispatch(toggleTodo(id))
    }

    const handleDelete = () => {
        if (window.confirm('delete todo?')){
            dispatch(removeTodo(id))
        }
    }


    return (
        <div>
            <input type="checkbox" checked={completed} onChange={handleToggle}/>
            {title}
            <span className={style.item} onClick={handleDelete}><img src={buttonImg} alt=""/></span>
        </div>
    );
};

export default TodoListItem;