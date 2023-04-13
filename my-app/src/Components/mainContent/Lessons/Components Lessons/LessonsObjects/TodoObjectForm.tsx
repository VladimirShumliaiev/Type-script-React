import React, {FC, SyntheticEvent} from 'react';

type TodoObjectProps = {
    title: string,
    setTitle: (str: string) => void
    addTodo: () => void
}

const TodoObjectForm: FC<TodoObjectProps> = ({title, setTitle, addTodo}) => {

    const formHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        addTodo()
        setTitle('')
    }

    return (
        <form onSubmit={formHandler}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder={'add todo...'}/>
            <button>add todos</button>
        </form>
    );
};

export default TodoObjectForm;