import React, {FC, useRef} from 'react';

type TodoInput = {
    text: string
    setText: (text: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInput> = (props) => {
    const {text, setText, addTodo} = props
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addTodo()
        setText('')
    }

    const handleOnchange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setText(event.target.value)
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <textarea
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