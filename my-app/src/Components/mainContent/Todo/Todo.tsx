import React, {useEffect, useState} from 'react';
import {addTodo, fetchTodo} from "../../../redux/Slices/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {useAppDispatch} from "../../../hooks/hooks";

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