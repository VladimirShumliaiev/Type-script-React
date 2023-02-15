import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {fetchAddTodo, fetchTodo} from "../../../redux/todoSlice";
import TodoInput from "./TodoInput";
import List from "./List";


const Todo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()
    const {loading, error} = useAppSelector(state => state.todo)

    const addTodo = () => {
        if (title.trim().length){
            dispatch(fetchAddTodo(title))
            setTitle('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[])

    return (
        <div>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTodo}/>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <List/>
        </div>
    );
};

export default Todo;