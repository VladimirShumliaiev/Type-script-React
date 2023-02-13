import React from 'react';

interface TodoInputProps {
    title: string,
    setTitle: (str: string) => void,
    addTodo: () => void,
}

const TodoInput: React.FC<TodoInputProps> = ({title, setTitle, addTodo}) => {

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        addTodo()
    }
    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         handleSubmit(e)
    //         setTitle('')
    //     }

    return (
        <div>
            <input title={title} onChange={( event:React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                   placeholder={'add todo...'}/>
            <button onClick={handleSubmit}>add</button>
        </div>
    );
};

export default TodoInput;