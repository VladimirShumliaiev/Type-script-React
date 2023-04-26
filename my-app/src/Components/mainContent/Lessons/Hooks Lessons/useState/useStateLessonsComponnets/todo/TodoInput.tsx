import React, {ChangeEvent, FC, useState} from 'react';

type Props = {
    addTodo: AddTodo
}

const TodoInput: FC<Props> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
         setNewTodo(e.target.value)
    }
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo(newTodo)
            setNewTodo('')
        }}>
            <input value={newTodo} onChange={handleChange}/>
            <button>add Todos</button>
        </form>
    );
};

export default TodoInput;