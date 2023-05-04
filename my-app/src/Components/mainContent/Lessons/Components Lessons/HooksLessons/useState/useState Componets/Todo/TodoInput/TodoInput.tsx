import React, {FC, useEffect, useRef} from 'react';
import style from './TodoInput.module.css';
import svg from '../../../../../../../../../assets/img/add-svgrepo-com.svg'

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
        <div className={style.item}>
            <input type="text" value={value} onChange={onChangeHandler} placeholder={'add todo...'} ref={inputRef} onKeyDown={onKeyDownHandler}/>
            <button className={style.itemButton} onClick={addTodo}><img src={svg} alt=""/></button>
        </div>
    );
};

export default TodoInput;