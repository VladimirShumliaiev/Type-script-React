import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {completedTodo, removeTodo} from "../../../../../redux/todoLessonsSlice";

type ListItemProp = {
    id: string,
    title: string,
    completed: boolean
}

const ListItem: FC<ListItemProp> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()

    const onChange = () => {
        dispatch(completedTodo(id))
    }

    const onClick = () => {
        dispatch(removeTodo(id))
    }
    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            {' '}
            <button onClick={onClick}> X </button>
        </div>
    );
};

export default ListItem;