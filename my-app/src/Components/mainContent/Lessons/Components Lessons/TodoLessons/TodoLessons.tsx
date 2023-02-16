import React, {useState} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {addTodo} from "../../../../../redux/todoLessonsSlice";
import TodoLessonsInput from "./TodoLessonsInput";
import TodoLessonsList from "./TodoLessonsList";

const TodoLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    const addTask = () => {
        dispatch(addTodo(title))
        setTitle('')
    }
    return (
        <div>
            <TodoLessonsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <TodoLessonsList/>
        </div>
    );
};

export default TodoLessons;