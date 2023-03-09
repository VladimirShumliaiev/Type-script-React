import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../../hooks/hooks";
import {deleteTitle} from "../../../../../../redux/Slices/examplesSlice";
import style from './Input.module.css'

type InputItemProps = {
    id: string,
    title: string
}

const InputItem: FC<InputItemProps> = ({id, title}) => {
    const dispatch = useAppDispatch()

    const delTitle = () => {
        dispatch(deleteTitle({id}))
    }
    return (
        <div>
            {title}
            {' '}
            <button className={style.button} onClick={delTitle}> &times; </button>
        </div>
    );
};

export default InputItem;