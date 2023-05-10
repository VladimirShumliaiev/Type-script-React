import React, {FC} from 'react';
import TodoItem from "./TodoItem/TodoItem";

type Todos = {
    id: number
    title: string
    completed: boolean
}

type TodoListProps = {
    todoList: Todos[]
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = (props) => {
    const {todoList, toggleTodo, removeTodo} = props

    return (
        <div>
            {
                todoList.map(e => <TodoItem toggleTodo={toggleTodo} removeTodo={removeTodo} key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoList;