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
    const {todos, toggleTodo, removeTodo} = props
    return (
        <div>
            {
                todos.map(todo => <TodoItem toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id} {...todo}/>)
            }
        </div>
    );
};

export default TodoList;