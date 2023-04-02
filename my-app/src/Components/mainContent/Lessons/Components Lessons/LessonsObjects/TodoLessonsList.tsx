import React from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import ListItem from "./ListItem";

const TodoLessonsList = () => {
    const listSelector = useAppSelector(state => state.todoLessons.todo)
    return (
        <div>
            {
                listSelector.map(e => <ListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoLessonsList;