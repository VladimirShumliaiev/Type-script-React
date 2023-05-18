import React, {FC} from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {removeTodo, toggleTodo} from "../../../redux/Slices/todoSlice";
import imgDelete from '../../../assets/img/delete-svgrepo-com.svg'
import styles from './Todo.module.css'

type TodoListItemProps = {
    title: string
    id: string
    completed: boolean
}

const TodoListItem: FC<TodoListItemProps> = ({title, id, completed}) => {
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        if (window.confirm('delete Todo?')) {
            dispatch(removeTodo(id))
        }
    }

    const onChangeHandler = () => {
        dispatch(toggleTodo(id))
    }
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onChangeHandler}/>
            {title}
            <span className={styles.item} onClick={onClickHandler}> <img src={imgDelete} alt=""/></span>
        </div>
    );
};

export default TodoListItem;