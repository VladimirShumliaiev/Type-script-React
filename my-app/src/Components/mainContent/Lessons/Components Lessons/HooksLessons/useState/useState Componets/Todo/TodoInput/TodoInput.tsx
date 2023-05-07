import React, {FC, useEffect, useRef} from 'react';

type TodoInput = {
    value: string
    setValue: (str: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInput> = ({value, setValue, addTodo}) => {

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
            <input type="text" value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} ref={inputRef} placeholder={'add text...'}/>
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoInput;