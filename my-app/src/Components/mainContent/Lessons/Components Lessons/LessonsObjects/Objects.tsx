import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {addFetchTodo, fetchTodoLessons} from "../../../../../redux/Slices/todoLessonsSlice";
import TodoLessonsInput from "./TodoLessonsInput";
import TodoLessonsList from "./TodoLessonsList";

const Objects = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    const addTask = () => {
        if (title.trim().length){
            dispatch(addFetchTodo(title))
            setTitle('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodoLessons())
    },[])

    return (
        <div>
            <TodoLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <TodoLessonsList/>
        </div>
    );
};

export default Objects;