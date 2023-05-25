import React from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const selector = useAppSelector(state => state.todo.todoList)
    return (
        <div>
            {
                selector.map(e => <TodoListItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoList;