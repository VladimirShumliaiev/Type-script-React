import React, {FC, useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo: FC = () => {
    const [todos, setTodos] = useState<Todos[]>([])
    const [value, setValue] = useState('')

    const addTodo = () => {
        if (value) {
            setTodos([...todos,
                {
                    id: Date.now(),
                    title: value,
                    completed: false,
                }])
            setValue('')
        }

    }

    const removeTodo = (id: number) => {
        if (window.confirm('delete todo?')) {
            setTodos(todos.filter(e => e.id !== id))
        }
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(e => {
            if (e.id !== id) return e
            return {
                ...e,
                completed: !e.completed
            }
        }))
    }

    return (
        <div>
            <TodoInput addTodo={addTodo} value={value} setValue={setValue}/>
            <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} item={todos}/>
        </div>
    );
};

export default Todo;