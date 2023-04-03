import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {addTodoLessons, fetchTodoLessons} from "../../../../../redux/Slices/lessonsObjectTodoSlice";
import TodoLessonsInput from "./TodoLessonsInput";
import TodoLessonsList from "./TodoLessonsList";

const TodoLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    const addTusk = () => {
        dispatch(addTodoLessons(title))
    }

    useEffect(() => {
        dispatch(fetchTodoLessons())
    }, [])

    return (
        <div>
            <TodoLessonsInput title={title} setTitle={setTitle} addTodo={addTusk}/>
            <TodoLessonsList/>
        </div>
    );
};

export default TodoLessons;