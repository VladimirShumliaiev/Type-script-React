import React, {FC, useEffect, useRef} from 'react';

type TodoInputProps = {
    value: string
    setValue: (title: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputProps> = (props) => {
    const {value, setValue, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addTodo()
        setValue('')
    }

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <input
                    value={value}
                    onChange={onChangeHandle}
                    ref={inputRef}
                    placeholder={'add text...'}
                />
                <button>+</button>
            </form>

        </div>
    );
};

export default TodoInput;