import React, {FC} from 'react';
import TodoItem from "./TodoItem/TodoItem";

type Todo = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todo: Todo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = (props) => {
    const {todo, removeTodo, toggleTodo} = props
    return (
        <div>
            {
                todo.map(todo => <TodoItem
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    key={todo.id} {...todo}/>)
            }
        </div>
    );
};

export default TodoList;