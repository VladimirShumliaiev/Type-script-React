import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {addTodo, fetchTodo} from "../../../redux/Slices/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const Todo: FC = () => {
    const [title, setTitle] = useState('')
    const {error, pending} = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch()

    const addTask = () => {
        if (title) {
            dispatch(addTodo(title))
            setTitle('')
        }

    }

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <div>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {pending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <TodoList/>
        </div>
    );
};

export default Todo;