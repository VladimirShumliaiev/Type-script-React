import React, {FC} from 'react';

type TodoLessonsInputProp = {
    title: string,
    setTitle: (str: string) => void
    addTodo: () => void
}

const TodoLessonsInput: FC<TodoLessonsInputProp> = ({title, addTodo, setTitle}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if(title !== '') {
                addTodo()
            }
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={`add Todo...`}/>
            <button>add</button>
        </form>
    );
};

export default TodoLessonsInput;