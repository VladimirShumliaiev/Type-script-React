import React, {FC, useEffect, useRef} from 'react';

type TodoInputProps = {
    title: string
    setTitle: (title: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputProps> = (props) => {
    const {title, setTitle, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addTodo()
        setTitle('')
    }

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    },[])

    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <input value={title} onChange={onChangeHandle} ref={inputRef} placeholder={'add text...'}/>
                <button>+</button>
            </form>
        </div>
    );
};

export default TodoInput;