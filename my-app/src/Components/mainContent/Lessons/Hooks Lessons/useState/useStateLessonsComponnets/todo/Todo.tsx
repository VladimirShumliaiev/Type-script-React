import React, {FC, useState} from 'react';
import TodoInput from "./TodoInput";
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
        completed: true
    },
    {
        id: 2,
        title: 'React',
        completed: true
    },
    {
        id: 3,
        title: 'C++',
        completed: false
    },

]


const Todo: FC = () => {
    const [todos, setTodos] = useState<Todo[]>(initialState)
    const [value, setValue] = useState('')

    const addTask = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value, completed: false
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        if (window.confirm('delete todo?')) {
            setTodos(todos.filter(e => e.id !== id))
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
    return (
        <div>
            <TodoInput value={value} setValue={setValue} addTodo={addTask}/>
            <TodoList todoList={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default Todo;