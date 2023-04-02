import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchCompleteTodoLessons, removeTodoLessons} from "../../../../../redux/Slices/todoLessonsSlice";
import style from './Objects.module.css'

type ListItemProps = {
    id: string,
    title: string,
    completed: boolean,
}


const ListItem: FC<ListItemProps> = ({id, completed, title}) => {
    const dispatch = useAppDispatch()

    const onChangeHandler = () => {
        dispatch(fetchCompleteTodoLessons(id))
    }

    const onClickHandler = () => {
        const del = window.confirm(`delete todo? ${id}`)
        if (del) {
            dispatch(removeTodoLessons(id))
        }
    }
    return (
        <div className={style.todo}>
            <input type={"checkbox"} checked={completed} onChange={onChangeHandler}/>
            {title}
            <button onClick={onClickHandler}>&times;</button>
        </div>
    );
};

export default ListItem;