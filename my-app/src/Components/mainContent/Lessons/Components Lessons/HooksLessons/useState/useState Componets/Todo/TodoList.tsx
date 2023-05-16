import React, {FC} from 'react';
import TodoItem from "./TodoItem/TodoItem";

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todos: Todo[]
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = (props) => {
    const {removeTodo, toggleTodo, todos} = props

    return (
        <div>
            {
                todos.map(e => <TodoItem
                    key={e.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    {...e}
                />)
            }
        </div>
    );
};

export default TodoList;