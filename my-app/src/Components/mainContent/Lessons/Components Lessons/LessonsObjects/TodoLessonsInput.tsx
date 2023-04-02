import React, { FC, SyntheticEvent} from 'react';

type Props = {
    title: string,
    setTitle: (str: string) => void
    addTodo: () => void
}

const TodoLessonsInput:FC<Props> = ({title, setTitle, addTodo}) => {

    const formHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        addTodo()
        setTitle('')
    }
    console.log(title)
    return (
        <form onSubmit={formHandler}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
            <button>add</button>
        </form>
    );
};

export default TodoLessonsInput;