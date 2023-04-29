import React, {FC, useEffect, useRef} from 'react';


type TodoInputProps = {
    title: string
    setTitle: (title: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputProps> = ({title, setTitle, addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }

    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text"
                   value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
                   ref={inputRef}
                   placeholder={'add todo...'}
            />

            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoInput;