import React, {FC, useEffect, useRef} from 'react';

type TodoInput = {
    addTodo: () => void
    value: string
    setValue: (str: string) => void
}

const TodoInput: FC<TodoInput> = ({addTodo, setValue, value}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const onKeyDawnHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    },[])


    return (
        <div>
            <input type="text" value={value} onChange={onChangeHandler} placeholder={'add text...'} onKeyDown={onKeyDawnHandler} ref={inputRef}/>
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoInput;