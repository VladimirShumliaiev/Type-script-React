import React, {FC} from 'react';
import {useAppDispatch} from "../../../../../../hooks/hooks";
import {addTitle} from "../../../../../../redux/Slices/examplesSlice";
import InputList from "./InputList";

type InputProps = {
    title: string
    setTitle: (str: string) => void
}

const Input: FC<InputProps> = ({title, setTitle}) => {
    const dispatch = useAppDispatch()

    const addText = () => {
        if (title.trim().length)
        dispatch(addTitle(title))
        setTitle('')
    }
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addText()
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <button> add</button>
            <InputList/>
        </form>
    );
};

export default Input;