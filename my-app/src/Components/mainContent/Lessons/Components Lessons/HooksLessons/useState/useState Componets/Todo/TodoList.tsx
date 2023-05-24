import React, {FC} from 'react';
import TodoItem from "./TodoItem/TodoItem";

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todos: Todo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = (props) => {
    const {todos, removeTodo, toggleTodo} = props
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