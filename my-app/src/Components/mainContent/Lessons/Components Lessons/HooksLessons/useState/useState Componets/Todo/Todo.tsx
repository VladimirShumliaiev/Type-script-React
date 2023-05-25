import React, {useState} from 'react';
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList";

type Todo = {
    id: number
    title: string
    completed: boolean
}

const initialState = [
    {
        id: 1,
        title: 'React',
        completed: true
    },
    {
        id: 2,
        title: 'TypeScript',
        completed: true
    }
]

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>(initialState)
    const [value, setValue] = useState('')

    const addTodo = () => {
        setTodos([...todos, {id: Date.now(), title: value, completed: false}])
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(e => {
            if (e.id !== id) return e
            return {
                ...e,
                completed: !e.completed
            }
        }))
    }

    const removeTodo = (id: number): void => {
        if (window.confirm('delete todo?')) {
            setTodos(todos.filter(e => e.id !== id))
        }
    }
    return (
        <div>
            <TodoInput addTodo={addTodo} value={value} setValue={setValue}/>
            <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todos}/>
        </div>
    );
};

export default Todo;