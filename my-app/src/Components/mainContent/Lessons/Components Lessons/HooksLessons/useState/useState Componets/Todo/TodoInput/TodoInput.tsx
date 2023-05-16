import React, {FC, useEffect, useRef, useState} from 'react';

type TodoInputProps = {
    addTodo: (value: string) => void
}

const TodoInput: FC<TodoInputProps> = ({addTodo}) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        addTodo(value)
        setValue('')
    }

    const onkeydownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
       if (e.key === 'Enter') {
           addTodo(value)
           setValue('')
       }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    return (
        <div>
            <input type="text"
                   value={value}
                   onChange={onChangeHandler}
                   onKeyDown={onkeydownHandler}
                   ref={inputRef}
                   placeholder={'text...'}
            />
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default TodoInput;