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
        title: 'Type-script',
        completed: true,
    },
    {
        id: 2,
        title: 'Java-script',
        completed: false,
    }
]

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>(initialState)
    const [title, setTitle] = useState('')

    const addTodo = () => {
        if (title) {
            setTodos([...todos, {id: Date.now(), title: title, completed: false}])
        }
        setTitle('')
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
            <TodoInput title={title} setTitle={setTitle} addTask={addTodo}/>
            <TodoList todoList={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default Todo;