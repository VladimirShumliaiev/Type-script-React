import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../hooks/hooks";
import {completedTodo, deleteTodo} from "../../../../../redux/Slices/lessonsObjectTodoSlice";


type TodoProps = {
    id: string,
    completed: boolean,
    title: string,
}

const TodoLessonsListItem: FC <TodoProps> = ({id, completed, title}) => {
    const dispatch = useAppDispatch()

    const deleteHandler = () => {
        const del = window.confirm('DELETE TODO?')
        if (del) {
            dispatch(deleteTodo(id))
        }
    }

    const completedHandler = () => {
        dispatch(completedTodo(id))
    }

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={completedHandler}/>
            {title}
            <button onClick={deleteHandler}>&times;</button>
        </div>
    );
};

export default TodoLessonsListItem;