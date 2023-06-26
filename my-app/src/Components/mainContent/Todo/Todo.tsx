import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {addTodo, fetchTodo} from "../../../redux/Slices/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    const addTask = () => {
        dispatch(addTodo(title))
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[])

    return (
        <div>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <TodoList/>
        </div>
    );
};

export default Todo;