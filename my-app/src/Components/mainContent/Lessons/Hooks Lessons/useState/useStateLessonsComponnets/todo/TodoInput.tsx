import React, {FC, useEffect, useRef} from 'react';

type TodoInputProps = {
    value: string
    setValue: (e: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputProps> = ({value, setValue, addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    return (
        <div>
            <input type="text" value={value} onChange={onChangeHandler} placeholder={'add todo...'} ref={inputRef} onKeyDown={onKeyDownHandler}/>
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoInput;