import React, {FC, SyntheticEvent} from 'react';

type TodoLessonsInputProps = {
    title: string,
    setTitle: (str: string) => void
    addTodo: () => void
}



const TodoLessonsInput: FC<TodoLessonsInputProps> = ({title, setTitle, addTodo}) => {

    const formHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        addTodo()
        setTitle('')
    }

    return (
        <form onSubmit={formHandler}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'add text...'}/>
            <button>add</button>
        </form>
    );
};

export default TodoLessonsInput;