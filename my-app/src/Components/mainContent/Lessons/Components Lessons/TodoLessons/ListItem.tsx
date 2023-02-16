import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {completedTodo, removeTodo} from "../../../../../redux/todoLessonsSlice";

type listItemProp = {
    id: string,
    title: string,
    completed: boolean,
}

const ListItem: FC<listItemProp> = ({title, id, completed}) => {
    const dispatch = useAppDispatch()
    const onClick = () => {
        const del = window.confirm('Delete todo?')
        if(del) {
            dispatch(removeTodo(id))
        }
    }
    const onChange = () => {
        dispatch(completedTodo(id))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <button onClick={onClick}>&times;</button>
        </div>
    );
};

export default ListItem;