import React, {FC} from 'react';
import TodoItem from "./TodoItem";


type TodoListProps = {
    toggleTodo: ToggleTodo,
    todos: Todos[],
}

const TodoList: FC<TodoListProps> = (
    {toggleTodo, todos}
) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;