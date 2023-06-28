import React, {useState} from 'react';
import ExampleAllInput from "./ExampleAllInput";
import ExampleAllList from "./ExampleAllList";

const ExampleAll = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)

    const addTask = () => {
        setTodos([...todos,{title: title, completed: false, id: Date.now()}])
        setTitle('')
        setCount(count + 1)
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(e => {
            if (id !== e.id) return e

            return {
                ...e,
                completed: !e.completed
            }
        }))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(e => e.id !== id))
        setCount(count - 1)
    }


    return (
        <div>
            <ExampleAllInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <ExampleAllList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todos}/>
            <hr/>
            <h3>TotalTodo:{count}</h3>
        </div>
    );
};

export default ExampleAll;