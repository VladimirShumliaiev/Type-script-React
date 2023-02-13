import React from 'react';
import {useAppSelector} from "../../hooks/hooks";
import ListItem from "./ListItem";

const List = () => {
    const listSelector = useAppSelector(state => state.todo.list)
    return (
        <div>
            {
                listSelector.map(e => <ListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default List;