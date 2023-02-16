import React from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import ListItem from "./ListItem";

const TodoLessonsList = () => {
    const todoListSelector = useAppSelector(state => state.todoLessons.todo)
    return (
        <div>
            {
                todoListSelector.map(e => <ListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoLessonsList;