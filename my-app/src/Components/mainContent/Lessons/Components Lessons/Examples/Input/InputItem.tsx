import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../../hooks/hooks";
import {deleteTitle, toggleTitle} from "../../../../../../redux/Slices/examplesSlice";
import style from './Input.module.css'

type InputItemProps = {
    id: string
    title: string
    completed: boolean
}

const InputItem: FC<InputItemProps> = ({id, title , completed}) => {
    const dispatch = useAppDispatch()

    const delTitle = () => {
        const del = window.confirm('Delete todo?')
        if (del) {
            dispatch(deleteTitle(id))
        }
    }

    const onClickInput = () => {
        dispatch(toggleTitle(id))
    }
    return (
        <li>
            <input className={style.input} type={"checkbox"} checked={completed} onClick={onClickInput}/>
            {title}
            {' '}
            <button className={style.button} onClick={delTitle}> &times; </button>
        </li>
    );
};

export default InputItem;