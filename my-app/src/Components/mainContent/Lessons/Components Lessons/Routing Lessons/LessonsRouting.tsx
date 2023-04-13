import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import style from './LessonsRouting.module.css'
import Examples from "../Examples/Examples";
import Functions from "../Functions/Function";
import AboutTypes from "../About Types/AboutTypes";
import TodoObject from "../LessonsObjects/TodoObject";


const LessonsRouting: FC = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'examples'} element={<Examples/>}/>
                <Route path={'aboutType'} element={<AboutTypes/>}/>
                <Route path={'functions'} element={<Functions/>}/>
                <Route path={'objects'} element={<TodoObject/>}/>
            </Routes>
        </div>

    );
};

export default LessonsRouting;