import React, {useState} from 'react';
import TestTodoInput from "./TestTodoInput";
import TestTodoList from "./TestTodoList";

type ITodo = {
    id: number,
    title: string,
    completed: boolean,
}

const initialState: ITodo[] = [
    {
        id: 1,
        title: 'Todo 1',
        completed: true,
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false,
    },

]



const TestTodo = () => {
    const [todos, setTodos] = useState<ITodo[]>(initialState)
    const [value, setValue] = useState('')

    const addTodo = () => {
        if (value) {
            setTodos([...todos,
                {
                    id: Date.now(),
                    title: value,
                    completed: false
                }])
            setValue('')
        }
    }

    return (
        <div>
            <TestTodoInput addTodo={addTodo} value={value} setValue={setValue}/>
            <TestTodoList item={todos}/>
        </div>
    );
};

export default TestTodo;