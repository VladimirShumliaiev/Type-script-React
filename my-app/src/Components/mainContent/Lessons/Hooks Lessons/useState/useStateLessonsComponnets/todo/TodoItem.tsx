import React, {FC} from 'react';

interface todoItemProps extends Todos {
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}

const TodoItem: FC<todoItemProps> = ({ completed, id, title , removeTodo, toggleTodo}) => {

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={()=> toggleTodo(id)}/>
            {title}
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    );
};

export default TodoItem;