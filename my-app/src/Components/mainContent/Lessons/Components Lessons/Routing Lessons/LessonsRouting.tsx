import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import style from './LessonsRouting.module.css'
import Examples from "../Examples/Examples";
import Functions from "../Functions/Function";
import Objects from "../TodoLessons/Objects";

const LessonsRouting: FC = () => {
    return (
        <div className={style.item}>
            <Routes>
                <Route path={'examples'} element={<Examples/>}/>
                <Route path={'functions'} element={<Functions/>}/>
                <Route path={'objects'} element={<Objects/>}/>
            </Routes>
        </div>

    );
};

export default LessonsRouting;