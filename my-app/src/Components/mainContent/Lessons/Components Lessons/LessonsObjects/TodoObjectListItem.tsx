import React, {FC} from 'react';
import style from './TodoObject.module.css'
import {useAppDispatch} from "../../../../../hooks/hooks";
import {deleteTodo, toggleTodo} from "../../../../../redux/Slices/lessonsObjectSlice";

type TodoProps = {
    title: string
    id: string
    completed: boolean
}


const TodoObjectListItem: FC<TodoProps> = ({completed, id, title}) => {
    const dispatch = useAppDispatch()

    const onChangeHandler = () => {
        dispatch(toggleTodo(id))
    }

    const onClickHandler = () => {
        const del = window.confirm("delete todo?")
        if (del) {
            dispatch(deleteTodo(id))
        }
    }
    return (
        <div className={style.Todo}>
                <input type="checkbox" checked={completed} onChange={onChangeHandler}/>
                {title}
               <button onClick={onClickHandler}>delete</button>
        </div>
    );
};

export default TodoObjectListItem;