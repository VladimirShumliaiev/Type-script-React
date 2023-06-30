import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {addTodo, fetchTodo} from "../../../redux/Slices/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const Todo = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])

    const addTask = () => {
        dispatch(addTodo(text))
    }

    return (
        <div>
            <TodoInput text={text} setText={setText} addTodo={addTask}/>
            <TodoList/>
        </div>
    );
};

export default Todo;