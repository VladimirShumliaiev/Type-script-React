import React, {FC} from 'react';

type InputProps = {
    title: string,
    setTitle: (str: string) => void,
    addTodo: () => void
}



const TodoLessonsInput: FC<InputProps> = ({title, addTodo, setTitle}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'add todo...'}/>
            <button>add todos</button>
        </form>
    );
};

export default TodoLessonsInput;