import React, {FC, useEffect, useRef} from 'react';

type TodoInput = {
    inputValue: string
    setInputValue: (text: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInput> = (props) => {
    const {inputValue, setInputValue, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        addTodo()
        setInputValue('')
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    return (
        <form onSubmit={onSubmitHandler}>
            <input
                value={inputValue}
                onChange={onChangeHandler}
                placeholder={'add text...'}
                ref={inputRef}
            />
            <button>add</button>
        </form>
    );
};

export default TodoInput;