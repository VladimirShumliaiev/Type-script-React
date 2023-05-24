import React, {useState} from 'react';
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList";


type Todo = {
    id: number
    title: string
    completed: boolean
}

const todoState = [
    {
        id: 1,
        title: 'Typescript',
        completed: true,
    },
    {
        id: 2,
        title: 'Java Script',
        completed: false,
    },

]


const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>(todoState)
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

    const removeTodo = (id: number) => {
        if (window.confirm('delete todo?')) {
            setTodos(todos.filter(e => e.id !== id))
        }
    }


    return (
        <div>
            <TodoInput value={value} setValue={setValue} addTodo={addTodo}/>
            <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}/>
        </div>
    );
};

export default Todo;