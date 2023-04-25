import React from 'react';
import {Route, Routes} from "react-router-dom";
import UseStateLessons from "../useState/useStateLessons";
import UseEffectLessons from "../useEffect/UseEffectLessons";
import style from './HooksRouting.module.css'
import UseContext from "../useContext/UseContext";


const HooksRouting = () => {
    return (
        <div className={style.item}>

            <Routes>
                <Route path={'useState'} element={<UseStateLessons/>}/>
                <Route path={'useEffect'} element={<UseEffectLessons/>}/>
                <Route path={'useContext'} element={<UseContext/>}/>
            </Routes>
        </div>
    );
};

export default HooksRouting;