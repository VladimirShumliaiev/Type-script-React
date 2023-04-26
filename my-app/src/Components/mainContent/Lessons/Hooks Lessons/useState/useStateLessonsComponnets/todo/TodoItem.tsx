import React, {FC} from 'react';

type Props = {
    toggleTodo: ToggleTodo
    todo: Todos
}

const TodoItem: FC<Props> = ({toggleTodo, todo}) => {
    return (
        <div>
            <input type={"checkbox"} checked={todo.completed} onChange={() => toggleTodo(todo)}/>
            {todo.title}
        </div>
    );
};

export default TodoItem;