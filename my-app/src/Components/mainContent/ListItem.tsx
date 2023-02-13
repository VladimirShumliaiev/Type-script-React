import React from 'react';
import {useAppDispatch} from "../../hooks/hooks";
import {canselTodos, statusTodos} from "../../redux/todoSlice";

interface ListItemProps{
    title: string,
    completed: boolean,
    id: string
}
const ListItem: React.FC<ListItemProps> = ({completed,title,id }) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={ () => dispatch(statusTodos(id))}/>
            {title}
            <span onClick={() => dispatch(canselTodos(id))}> X</span>
        </div>
    );
};

export default ListItem;