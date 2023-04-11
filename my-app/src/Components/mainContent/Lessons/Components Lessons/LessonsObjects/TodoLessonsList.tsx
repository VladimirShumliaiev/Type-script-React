import React from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import TodoLessonsListItem from "./TodoLessonsListItem";


const List = () => {
    const listSelector = useAppSelector(state => state.lessonsObject.list)
    return (
        <div>
            {
                listSelector.map(e => <TodoLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default List;