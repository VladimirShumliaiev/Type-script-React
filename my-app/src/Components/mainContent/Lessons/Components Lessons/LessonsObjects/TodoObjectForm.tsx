import React, {FC} from 'react';

type TodoObjectProps = {
    title: string,
    setTitle: (str: string) => void
}

const TodoObjectForm: FC<TodoObjectProps> = ({title, setTitle}) => {
    return (
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder={'add todo...'}/>
            <button>add todos</button>
        </div>
    );
};

export default TodoObjectForm;