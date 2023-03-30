import React, {FC} from 'react';
import {useAppSelector} from "../../../../../../hooks/hooks";
import InputItem from "./InputItem";
import style from './Input.module.css'

const InputList: FC = () => {
    const list = useAppSelector(state => state.examples.examples)

    return (
        <ol>
            {
                list.map(e =><div className={style.todo}><InputItem key={e.id} {...e}/></div>
                )
            }
        </ol>
    );
};

export default InputList;