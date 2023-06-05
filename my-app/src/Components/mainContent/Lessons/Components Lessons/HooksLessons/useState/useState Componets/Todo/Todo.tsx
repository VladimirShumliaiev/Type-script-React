import React, {useEffect, useState} from 'react';
import axios from "axios";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList";
import style from './Todo.module.css'

type Todo = {
    id: number
    title: string
    completed: boolean
}

const Todo = () => {
    const [todo, setTodo] = useState<Todo[]>([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setTodo(res.data))
    }, [])

    const addTask = () => {
        setTodo([...todo, {id: 1, title: 'React', completed: false}])
    }

    const toggleTodo = (id: number) => {
        setTodo(todo.map(todo => {
            if (id !== todo.id) return todo
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }
    const removeTodo = (id: number): void => {
        if (window.confirm('remove todo?')) {
            setTodo(todo.filter(e => e.id !== id))
        }
    }
    return (
        <div>
            <TodoInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                addTodo={addTask}
            />
            <div className={style.item}>
                <TodoList
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            </div>

        </div>
    );
};

export default Todo;