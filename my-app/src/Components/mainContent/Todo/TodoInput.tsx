import React, {FC, useRef} from 'react';

type TodoInputType = {
    text: string
    setText: (text: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputType> = (props) => {
    const {text, setText, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if (text.trim().length) {
        addTodo()
        setText('')
        }
       
    }

    const handleOnchange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setText(event.target.value)
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <input
                value={text}
                onChange={handleOnchange}
                ref={inputRef}
                placeholder={'add text...'}
            />
            <button>add</button>
        </form>
    );
};

export default TodoInput;