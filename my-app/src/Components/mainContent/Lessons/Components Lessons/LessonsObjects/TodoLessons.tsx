import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../hooks/hooks";
import {addTodoLessons, fetchTodoLessons} from "../../../../../redux/Slices/lessonsObjectTodoSlice";
import TodoLessonsInput from "./TodoLessonsInput";
import TodoLessonsList from "./TodoLessonsList";

const TodoLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()
    const {error, loading} = useAppSelector(state => state.lessonsObject)

    const addTusk = () => {
        if (title.trim().length) {
            dispatch(addTodoLessons(title))
        }
    }

    useEffect(() => {
        dispatch(fetchTodoLessons())
    }, [])

    return (
        <div>
            <TodoLessonsInput title={title} setTitle={setTitle} addTodo={addTusk}/>
            {loading && <h1>Loading...</h1>}
            {error && <h1> {error} </h1>}
            <TodoLessonsList/>
        </div>
    );
};

export default TodoLessons;