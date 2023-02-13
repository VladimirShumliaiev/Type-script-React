import React from 'react';

interface TodoInputProps {
    title: string,
    setTitle: (str: string) => void,
    addTodo: () => void,
}

const TodoInput: React.FC<TodoInputProps> = ({title, setTitle, addTodo}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTodo()
    }
    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
            setTitle('')
        }
    }
    return (
        <div>
            <input title={title} onChange={e => setTitle(e.target.value)} onKeyDown={handleKeyPress}
                   placeholder={'add todo...'}/>
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoInput;