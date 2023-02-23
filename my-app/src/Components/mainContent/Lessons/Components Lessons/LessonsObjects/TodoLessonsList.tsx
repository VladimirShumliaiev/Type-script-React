import React from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import ListItem from "./ListItem";

const TodoLessonsList = () => {
    const todoList = useAppSelector(state => state.todoLessons.todo)
    return (
        <div>
            {
                todoList.map(e => <ListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoLessonsList;