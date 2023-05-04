import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import style from './HooksRouting.module.css'
import UseStateLessons from "../useState/useState Componets/useStateLessons";
import UseEffectLessons from "../useEffect/UseEffectLessons";
import UseContextLessons from "../useContext/UseContext";


const HooksRouting = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'useState'} element={<UseStateLessons/>}/>
                <Route path={'useEffect'} element={<UseEffectLessons/>}/>
                <Route path={'useContext'} element={<UseContextLessons/>}/>
            </Routes>
        </div>
    );
};

export default HooksRouting;