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
    const {todos, removeTodo, toggleTodo} = props
    return (
        <div>
            {
                todos.map(e => <TodoItem
                    key={e.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    {...e}
                />)
            }
        </div>
    );
};

export default TodoList;