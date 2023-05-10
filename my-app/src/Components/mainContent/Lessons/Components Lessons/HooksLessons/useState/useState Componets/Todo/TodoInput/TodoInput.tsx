import React, {FC, useEffect, useRef} from 'react';

type TodoInputProps = {
    value: string,
    setValue: (value: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputProps> = (props) => {
    const {value, setValue, addTodo} = props
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
    },[])


    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                ref={inputRef}
                placeholder={'add title...'}
            />
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoInput;