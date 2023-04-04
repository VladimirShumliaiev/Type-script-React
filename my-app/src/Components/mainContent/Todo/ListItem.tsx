import React from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {fetchDeleteTodo, fetchToggleTodo} from "../../../redux/Slices/todoSlice";
import styles from './Todo.module.css'

interface ListItemProps {
    title: string,
    completed: boolean,
    id: string
}
const ListItem: React.FC<ListItemProps> = ({completed,title,id }) => {
    const dispatch = useAppDispatch()

    const toggleHandler = () => {
        dispatch(fetchToggleTodo(id))
    }

    const deleteHandler = () => {
        dispatch(fetchDeleteTodo(id))
    }

    return (
        <div>
            <input type={"checkbox"} checked={ completed } onChange={ toggleHandler }/>
            {title}
            <span className={styles.item} onClick={ deleteHandler }> X</span>
        </div>
    );
};

export default ListItem;