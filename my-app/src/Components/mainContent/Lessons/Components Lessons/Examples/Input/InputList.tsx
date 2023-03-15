import React, {FC} from 'react';
import {useAppSelector} from "../../../../../../hooks/hooks";
import InputItem from "./InputItem";

const InputList: FC = () => {
    const list = useAppSelector(state => state.examples.examples)

    return (
        <ol>
            {
                list.map(e => <InputItem key={e.id} {...e}/>
                )
            }
        </ol>
    );
};

export default InputList;