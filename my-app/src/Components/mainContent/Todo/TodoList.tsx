import React from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const todoList = useAppSelector(state => state.todo.list)

    return (
        <div>
            {
                todoList.map(todo => <TodoListItem key={todo.id} {...todo}/>)
            }
        </div>
    );
};

export default TodoList;