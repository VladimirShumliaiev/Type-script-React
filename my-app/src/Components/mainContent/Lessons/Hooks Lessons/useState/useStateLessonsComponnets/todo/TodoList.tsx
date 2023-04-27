import React, {FC} from 'react';
import TodoItem from "./TodoItem";

type TodoListProps = {
    item: Todos[],
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({item, removeTodo, toggleTodo}) => {
    return (
        <div>
            {
                item.map(e => <TodoItem
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoList;