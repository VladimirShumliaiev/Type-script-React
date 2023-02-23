import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {addTodo, fetchTodoLessons} from "../../../../../redux/todoLessonsSlice";
import TodoLessonsInput from "./TodoLessonsInput";
import TodoLessonsList from "./TodoLessonsList";

const Objects = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    const addTask = () => {
        dispatch(addTodo(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodoLessons())
    })

    return (
        <div>
            <TodoLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <TodoLessonsList/>
        </div>
    );
};

export default Objects;