import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {completedTodo, deleteTodo} from "../../../../../redux/Slices/lessonsObjectTodoSlice";
import style from './TodoLessons.module.css'


type TodoProps = {
    id: string,
    completed: boolean,
    title: string,
}

const TodoLessonsListItem: FC<TodoProps> = ({id, completed, title}) => {
    const dispatch = useAppDispatch()

    const deleteHandler = () => {
        const del = window.confirm('DELETE TODO?')
        if (del) {
            dispatch(deleteTodo(id))
        }
    }

    const editHandler = () => {
        const edit = window.confirm('edit todo?')
        if (edit) {

        }
    }

    const completedHandler = () => {
        dispatch(completedTodo(id))
    }

    return (
        <div className={style.Todo}>
            <input type={"checkbox"} checked={completed} onChange={completedHandler}/>

            <span>
                {title}
            </span>
            {' '}
            <button className={style.TodoButton}>
                <img src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" alt=""/>
            </button>
            {' '}
            <button className={style.TodoButton} onClick={deleteHandler}>
                &times;
            </button>
        </div>
    );
};

export default TodoLessonsListItem;