import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const initialState: Todos[] = [
    {
        title: 'title one',
        completed: false
    },
    {
        title: 'title two',
        completed: true
    },

]


const Todo = () => {
    const [todos, setTodos] = useState<Array<Todos>>(initialState)

    const toggleTodo: ToggleTodo = (selectedTodo: Todos) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const addTodo: AddTodo = (addTodos) => {
        if (addTodos.trim().length) {
            setTodos([...todos, {title: addTodos, completed: false}])
        }

    }
    return (
        <div>
            <TodoInput addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default Todo;