import React, {FC, useEffect, useRef} from 'react';

type TodoInput = {
    value: string
    setValue: (str: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInput> = ({value, setValue, addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitHandle: React.FormEventHandler<HTMLFormElement>  = (e) => {
        e.preventDefault()
        addTodo()
        setValue('')
    }

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    },[])
    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <input
                    value={value}
                    onChange={onChangeHandle}
                    ref={inputRef}
                    placeholder={'Text...'}
                />
                <button>+</button>
            </form>
        </div>
    );
};

export default TodoInput;