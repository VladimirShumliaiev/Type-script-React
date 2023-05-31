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
        title: 'TypeScript',
        completed: true,
    },
    {
        id: 2,
        title: 'React',
        completed: true,
    }
]



const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>(initialState)
    const [value, setValue] = useState('')

    const addTask = () => {
        setTodos([...todos,{id: Date.now(), title: value, completed: false}])
    }

    const toggleTodo = (id: number):void => {
            setTodos(todos.map(e => {
                if (e.id !== id) return e
                return {
                    ...e,
                    completed: !e.completed
                }
            }))
    }

    const removeTodo = (id: number):void => {
        if (window.confirm('Delete todo?')) {
            setTodos(todos.filter(e => e.id !== id))
        }
    }
    return (
        <div>
            <TodoInput addTodo={addTask} value={value} setValue={setValue}/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default Todo;