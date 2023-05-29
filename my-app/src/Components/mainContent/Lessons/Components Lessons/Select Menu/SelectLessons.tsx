import React, {useState} from 'react';
import style from './SelectLessons.module.css'
import OneSelect from "./Select Components/OneSelect";
import TwoSelect from "./Select Components/TwoSelect";
import ThreeSelect from "./Select Components/ThreeSelect";

const SelectLessons = () => {
    const [value, setValue] = useState('')

    const onChangeHandle: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <select className={style.select} value={value} onChange={onChangeHandle}>
                <option value={'1'}>One</option>
                <option value={'2'}>Two</option>
                <option value={'3'}>Three</option>
            </select>
            <div className={style.select}>
                {value === '1' && <OneSelect/>}
                {value === '2' && <TwoSelect/>}
                {value === '3' && <ThreeSelect/>}
            </div>
        </div>
    );
};


export default SelectLessons;