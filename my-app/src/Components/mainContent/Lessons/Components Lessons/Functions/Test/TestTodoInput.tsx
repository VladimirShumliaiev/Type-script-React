import React, {FC, useEffect, useRef} from 'react';

type TestTodoInput = {
    value: string,
    setValue: (str: string) => void
    addTodo: () => void
}


const TestTodoInput: FC<TestTodoInput> = ({value, setValue, addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if ( inputRef.current)
        inputRef.current.focus()
    },[])

    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <input type="text" value={value} onChange={handlerOnChange} ref={inputRef}/>
            <button>add</button>
        </form>
    );
};

export default TestTodoInput;
