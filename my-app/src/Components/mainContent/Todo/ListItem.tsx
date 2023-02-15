import React from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {fetchDeleteTodo, fetchToggleTodo} from "../../../redux/todoSlice";

interface ListItemProps{
    title: string,
    completed: boolean,
    id: string
}
const ListItem: React.FC<ListItemProps> = ({completed,title,id }) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={ () => dispatch(fetchToggleTodo(id))}/>
            {title}
            <span onClick={() => dispatch(fetchDeleteTodo(id))}> X</span>
        </div>
    );
};

export default ListItem;