import React from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const todoList = useAppSelector(state => state.todo.list)
    return (
        <div>
            {
                todoList.map(e => <TodoListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoList;