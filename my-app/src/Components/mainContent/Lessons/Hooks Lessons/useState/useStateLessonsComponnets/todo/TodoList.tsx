import React, {FC} from 'react';
import TodoItem from "./TodoItem";

type Todo = {
    id: number,
    title: string,
    completed: boolean,
}

type TodoListProps = {
    item: Todo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({item, removeTodo, toggleTodo}) => {
    return (
        <div>
            {
                item.map(e => <TodoItem key={e.id} removeTodo={removeTodo} toggleTodo={toggleTodo} {...e}/>)
            }
        </div>
    );
};

export default TodoList;