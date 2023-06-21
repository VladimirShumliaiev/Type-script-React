import React, {useEffect, useState} from 'react';
import axios from "axios";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";

type Todo = {
    id: number
    title: string
    completed: boolean
}

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then
        (({data}) => setTodos(data))
    },[])

    const addTask = () => {
        setTodos([...todos,{id: 203, title: title, completed: false}])
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => {
            if (id !== todo.id) return todo

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const removeTodo = (id: number) => {
       setTodos(todos.filter(e => e.id !== id))
    }


    return (
        <div>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
    );
};

export default Todo;