import React, {useState} from 'react';

type ITodo = {
    id: number,
    title: string,
    completed: boolean,
}

const TestTodo = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')
    return (
        <div>
            
        </div>
    );
};

export default TestTodo;