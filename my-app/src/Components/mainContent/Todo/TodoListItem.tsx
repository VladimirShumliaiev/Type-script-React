import React, {FC} from 'react';
import style from './Todo.module.css'
import {useAppDispatch} from "../../../hooks/hooks";
import {removeTodo, toggleTodo} from "../../../redux/Slices/todoSlice";
import buttonImg from '../../../assets/img/delete-svgrepo-com.svg'

type TodoListProps = {
    id: string
    title: string
    completed: boolean
}

const TodoListItem: FC<TodoListProps> = (props) => {
    const {id, completed, title} = props
    const dispatch = useAppDispatch()

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = () => {
        dispatch(toggleTodo(id))
    }

    const onclickHandle: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (window.confirm('delete todo')) {
            dispatch(removeTodo(id))
        }
    }
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={onChangeHandle}
            />
            {title}
            <span className={style.item} onClick={onclickHandle}><img src={buttonImg} alt=""/></span>
        </div>
    );
};

export default TodoListItem;