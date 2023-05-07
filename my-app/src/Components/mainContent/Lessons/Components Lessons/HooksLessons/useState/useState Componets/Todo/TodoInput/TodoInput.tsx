import React, {FC, useEffect, useRef} from 'react';

type TodoInputProps = {
    title: string
    setTitle: (str: string) => void
    addTask: () => void
}
const TodoInput: FC<TodoInputProps> = ({title, setTitle, addTask}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    },[])

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }

    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={onChangeHandler}
                ref={inputRef}
                onKeyDown={onKeyDownHandler}
                placeholder={'add text...'}
            />
            <button onClick={addTask}>add</button>
        </div>
    );
};

export default TodoInput;