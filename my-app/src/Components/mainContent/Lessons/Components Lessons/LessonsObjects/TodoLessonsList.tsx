import React from 'react';
import {useAppSelector} from "../../../../../hooks/hooks";
import TodoLessonsListItem from "./TodoLessonsListItem";


const TodoLessonsList = () => {
    const todoLessonsListSelector = useAppSelector(state => state.lessonsObject.todo)
    return (
        <div>
            {
               todoLessonsListSelector.map(e => <TodoLessonsListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoLessonsList;