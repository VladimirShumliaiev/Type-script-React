import React, {FC} from 'react';
import {useAppSelector} from "../../../../../../hooks/hooks";
import InputItem from "./InputItem";

const InputList: FC = () => {
    const list = useAppSelector(state => state.examples.examples)

    return (
        <div>
            {
                list.map(e => <InputItem key={e.id} {...e}/>
                )
            }
        </div>
    );
};

export default InputList;