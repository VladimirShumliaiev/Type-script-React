import React, {FC} from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {removeTodo, toggleTodo} from "../../../redux/Slices/todoSlice";

type TodoListItemProps = {
    title: string
    id: string
    completed: boolean
}

const TodoListItem: FC<TodoListItemProps> = ({title, id, completed}) => {
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        if (window.confirm('delete Todo?')) {
            dispatch(removeTodo(id))
        }
    }

    const onChangeHandler = () => {
        dispatch(toggleTodo(id))
    }
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onChangeHandler}/>
            {title}
            <button onClick={onClickHandler}>&times;</button>
        </div>
    );
};

export default TodoListItem;