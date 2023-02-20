import React from 'react';

interface TodoInputProps {
    title: string,
    setTitle: (str: string) => void,
    addTodo: () => void,
}

const TodoInput: React.FC<TodoInputProps> = ({title, setTitle, addTodo}) => {


    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
            setTitle('')
        }
        }
        >
            <input value={title} onChange={(e) => setTitle(e.target.value)}
                   placeholder={'add todo...'}/>
            <button>add</button>
        </form>
    );
};

export default TodoInput;