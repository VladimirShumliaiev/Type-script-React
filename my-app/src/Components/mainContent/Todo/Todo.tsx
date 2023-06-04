import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {addTodo, fetchTodo} from "../../../redux/Slices/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import style from "./Todo.module.css";



const Todo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()
    const {error, pending} = useAppSelector(state => state.todo)

    const addTask = () => {
        if (title) {
            dispatch(addTodo(title))
        }
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])

    return (
        <div className={style.item}>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {pending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <TodoList/>
        </div>
    );
};

export default Todo;