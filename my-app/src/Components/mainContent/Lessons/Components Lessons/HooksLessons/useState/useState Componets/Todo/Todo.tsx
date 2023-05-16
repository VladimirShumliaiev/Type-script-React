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
        title: 'Type-script',
        completed: true
    },
    {
        id: 2,
        title: 'Java-script',
        completed: false
    }
]

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>(todoState)

    const addTask = (value: string) => {
        if (value) {
            setTodos([...todos,{id: Date.now(), title: value, completed: false}])
        }
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
        if (window.confirm('Delete todo?')) {
            setTodos(todos.filter(e => e.id !== id))
        }
    }
    return (
        <div>
            <TodoInput addTodo={addTask}/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default Todo;