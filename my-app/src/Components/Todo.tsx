import React, {useState} from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {addTodos} from "../redux/todoSlice";
import TodoInput from "./mainContent/TodoInput";
import List from "./mainContent/List";


const Todo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()
    const addTodo = () => {
        if (title.trim().length){
            dispatch(addTodos(title))
            setTitle('')
        }
    }

    return (
        <div>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTodo}/>
            <List/>
        </div>
    );
};

export default Todo;