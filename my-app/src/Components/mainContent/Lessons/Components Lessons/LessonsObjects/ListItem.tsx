import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {fetchCompleteTodoLessons, removeTodoLessons} from "../../../../../redux/Slices/todoLessonsSlice";

type ListItemProp = {
    id: string,
    title: string,
    completed: boolean
}

const ListItem: FC<ListItemProp> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()

    const onChange = () => {
        dispatch(fetchCompleteTodoLessons(id))
    }

    const onClick = () => {
        const del = window.confirm('delete todo?')
        if (del) {
            dispatch(removeTodoLessons(id))
        }
    }

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            {' '}
            <button onClick={onClick}> X</button>
        </div>
    );
};

export default ListItem;